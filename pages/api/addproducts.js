import Product from '@/models/Product';
import connectDb from '@/middleware/mongoose';

const addProducts = async (req, res) => {
  try {
    if (req.method === 'POST') {
      console.log(req.body);
      for (let i = 0; i < req.body.length; i++) {
        const product = new Product({
          title: req.body[i].title,
          slug: req.body[i].slug,
          desc: req.body[i].desc,
          img: req.body[i].img,
          category: req.body[i].category,
          size: req.body[i].size,
          color: req.body[i].color,
          price: req.body[i].price,
          availableQty: req.body[i].availableQty,
        });
        await product.save();
      }

      res.status(200).json({ success: 'success' });
    } else {
      res.status(400).json({ error: 'Not Allowed' });
    }
  } catch (error) {
    console.error('Error adding products:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default connectDb(addProducts);
