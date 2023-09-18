import Product from '@/models//Product'; // Correct import path for Product model
import connectDb from '@/middleware/mongoose'; 

const deleteProducts = async (req, res) => {
  try {
    if (req.method === 'DELETE') {
      console.log(req.body);
      const productIds = req.body.id;
      await Product.deleteOne({ _id: productIds});
      res.status(200).json({ success: 'Products deleted successfully' });
    } else {
      res.status(400).json({ error: 'Bad Request: Method not allowed' });
    }
  } catch (error) {
    console.error('Error deleting products:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default connectDb(deleteProducts);
