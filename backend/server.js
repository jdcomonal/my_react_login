const express = require("express")
const app = express()
const cors = require('cors')
const jwt = require("jsonwebtoken")

const port = 5000; //port

// Parse URL-encoded form data 
// The express.urlencoded() function is used to parse incoming requests with 
// URL-encoded payloads and populate the req.body property with the parsed data.
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

//temp database for books
const Books = [
    {
        id: 1,
        BookName: "PHP 8",
        YearPublished: "2023",
        Author: "VicS",
        Category: "Web",
        status: 1,
    },
    {
        id: 2,
        BookName: "React.js",
        YearPublished: "2000",
        Author: "Peter SMith",
        Category: "Web",
        status: 1,
    },
    {
        id: 3,
        BookName: "CSS framework",
        YearPublished: "2005",
        Author: "Jaguar",
        Category: "Web",
        status: 1,
    },
    {
        id: 4,
        BookName: "Data Science",
        YearPublished: "2023",
        Author: "Vic S",
        Category: "Data",
        status: 1,
    },
]

//temp database for users
const LoginProfiles = [

    {
        id: 1,
        username: "admin",
        password: "passwd123",
        isAdmin: true,
    },
    {
        id: 2,
        username: "staff",
        password: "123456",
        isAdmin: false,
    },
    {
        id: 3,
        username: "vice",
        password: "abrakadabra",
        isAdmin: false,
    },
    {
        id: 4,
        username: "super",
        password: "69843",
        isAdmin: true,
    },
    {
        id: 5,
        username: "user",
        password: "123",
        isAdmin: false,
    }
];


//4 middleware for security
const verify = (req, res, next) => {

    // retrieves the value of the Authorization header from an incoming HTTP request
    const autHeader = req.headers.authorization;
    console.log('check token here:  ' + req.headers.authorization);

    if (autHeader) {
        // Extract the token from the Authorization header
        const token = autHeader.split(" ")[1];


        // This line verifies the JWT token provided in the token variable.
        // It uses the jsonwebtoken library to perform the verification.
        jwt.verify(token, "ThisMYsecretKey", (err, user) => { // receives two parameters: err (error) and user (decoded payload from the JWT).

            if (err) {
                return res.status(403).json("token is not valid")
            }
            // Store the user information in the request object
            req.user = user;
            next();// Move to the next middleware or route handler
        })

    } else {
        return res.status(403).json("You are not authenticated")
    }
}
//generate token 
const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "ThisMYsecretKey", { expiresIn: '1000s' })
}

// 1 Make an endpoint to return all books in an array of JSON objects, please refer to
app.get('/books', verify, (req, res) => {
    

    res.json(Books);

})

// 2 Make an endpoint that will receive an Id of a book and return its details
app.post('/find_book', verify, (req, res) => {

    let book_id = parseInt(req.body.book_id); // Accessing the value from the request body ; parseInt() = convert str to number

    const book = Books.find((u) => {

        console.log("Searching:", u.id, typeof (u.id), "===", typeof (book_id), book_id);

        return u.id === book_id;
    });

    console.log(book);

    if (book) {

        res.json(book);

    } else {
        res.status(404).json("BOOK NOT FOUND");
    }
});

//3 Create a login end point and implement the JWT security, use the LoginProfiles variable below.
app.post('/login', (req, res) => {

    // let username = req.body.username;
    // let password = req.body.password;
    const { username, password } = req.body;

    const user = LoginProfiles.find((u) => {
        return u.username === username && u.password === password;
    });

    if (user) {

        const accessToken = generateAccessToken(user);

        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken: accessToken,
        });

    } else {
        res.status(400).json("Username or Password incorrect");
        // res.json(false);
    }

});

// ------------------

app.get('/all-user',(req, res) => {
    
    res.json(LoginProfiles);

})





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});