import Product from '@/models/Product';
import connectDb from '@/middleware/mongoose';

const updateProducts = async (req, res) => {
  try {
    if (req.method === 'POST') {
      console.log(req.body);
      for (let i = 0; i < req.body.length; i++) {
        const product = await Product.findByIdAndUpdate(req.body[i]._id , req.body[i])
      }
      res.status(200).json({ success: 'success'  });
    } else {
      res.status(400).json({ error: 'Not Allowed' });
    }
  } catch (error) {
    console.error('Error adding products:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default connectDb(updateProducts);
