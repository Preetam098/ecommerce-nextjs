
import Product from '@/models/Product';
import connectDb from '@/middleware/mongoose';

const handler = async (req, res) => {
  try {
    
  await connectDb();
  
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default connectDb(handler);

