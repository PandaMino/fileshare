import * as Express from "express";
const router = Express.Router();

router.get('/:id', (req:any, res:any) => {
  if (!isNaN(req.params.id)) {
    res.render('user/user');
  } else {
    res.send('404');
  }
});

export default router;
