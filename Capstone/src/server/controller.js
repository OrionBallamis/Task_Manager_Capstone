const {User} = require('./models')
const taskdb = [
    {
        name: 'dishes',
        body: 'finish the dishes',
        priority: 'less important',
        id: 1
    },
    {
        name: 'garbage',
        body: 'take out the trash, it stinks',
        priority: 'important',
        id: 2
    },
    {
        name: 'capstone',
        body: 'finish your capstone!!',
        priority: 'important',
        id: 3
    },
    {
        name: 'homework',
        body: 'finish your homework',
        priority: 'important',
        id: 4
    },
    {
        name: 'clean the bathroom',
        body: 'finish cleaning up the bathrooom',
        priority: 'less important',
        id: 5
    }
]

const usersdb = [
    {
        username: '',
        password: ''
    },
    {
        username: 'John',
        password: 'JohnnyTest'
    }
]

module.exports = {

    allTaskHandler: (req, res) => {
        console.log(taskdb)
        res.status(200).send(taskdb)
    },

    addTaskHandler: (req, res) => {
        let [ name, body, priority ] = req.body
        let id = taskdb.length + 1

        taskdb.push({
            name: name,
            body: body,
            priority: priority,
            id: id
        })
    },

    deleteTaskHandler: (req, res) => {
        let [ id ] = req.body
        console.log(id)
        taskdb.splice(() => {
            for (let i = 0; i < taskdb.length; i++){
                if(id === taskdb[i].id) {
                    return taskdb[i].id
                }
            }
        }, 1)
        console.log(taskdb)
        res.status(200).send(taskdb)
    },

    loginHandler: async (req, res) => {
        try {
            let validUser = await User.findOne({where:
                {username: req.body.username}
            })
            if (validUser) {
                if (req.body.password === validUser.dataValues.password) {
                    return res.status(200).send(validUser)
                } else {
                    return res.status(401).send('password incorrect')
                }
            } else {
                return res.status(401).send("username doesn't exist")
            }
        }
        catch (err) {
            res.status(400).send(err)
        }
        console.log('login')
    },

    signUpHandler: async (req, res) => {
        try {
            let userCheck = await User.findOne({
                where: { username: req.body.username }
            })
            if(userCheck) {
                return res.status(401).send("username exist")
            } else {
                let newUser = await User.create(req.body)
                return res.status(200).send(newUser)
            }
        }
        catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
        console.log('register')
    }
}
