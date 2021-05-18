import express from 'express';
const router =express.Router();
router.get('/',(req,res)=>{
    res.send('User call of /');
});
export default router;