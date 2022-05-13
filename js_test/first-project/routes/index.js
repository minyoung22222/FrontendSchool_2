var express = require('express');
var router = express.Router();

const postModel = require('../model/post');

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    const result = await post.save();
    res.status(200).json({
      message: "upload success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
  
});

router.get('/', async (req, res) => {
  try{
    const result = await postModel.find({});
    res.status(200).json({
      message: "read sucess!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "datail success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "update success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete success!!",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
// const loginCheck = require("../module/loginCheck");
// const upload = require("../module/imageUpload");

// router.get('/', loginCheck, (req, res) => {
//   res.status(200).json({
//     message: "login success!!!!",
//   });
// });

// router.post('/upload', upload.single('image'),(req,res) => {
//   const file = req.file;
//   console.log(file);
//   res.status(200).json({
//     message: "upload success!!",
//   })
// })

module.exports = router;

// let arr = [];

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/main', (req, res) => {
//   // console.log(req.body);
//   const data = req.body.data;
//   // res.send("문자열이 응답됩니다!!");
//   // res.json({
//   //   message: "json 응답",
//   // })
//   res.render("index");
// });

// router.get('/read', (req, res) => {
//   res.status(200).json({
//     message: "read success",
//   });
// });

// router.post('/create', (req, res) => {
//   const {data} = req.body;
//   arr.push(data);
//   res.status(200).json({
//     message: "create success",
//     result: arr,
//   });
//   console.log(req.body);
// });

// router.put("/update/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } =req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message: "update success!",
//     result: arr,
//   });
// });

// router.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   arr.splice(id, 1);
//   res.status(200).json({
//     message: "delete success", 
//     result: arr,
//   })
// })

