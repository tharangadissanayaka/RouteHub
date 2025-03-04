import express from 'express'
import {createTour,deleteTour,getAllTour,getFeaturedTour,getSingleTour,getTourCount,updateTour} from './../controllers/tourController.js'
import Tour from '../models/Tour.js';

const router = express.Router()

router.post('/' ,createTour)

router.put('/:id' ,updateTour)

// DELETE all tours
router.delete('/delete-all', async (req, res) => {
    try {
        await Tour.deleteMany({});
        res.status(200).json({ message: "All tours deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting tours" });
    }
});

router.get('/:id' ,getSingleTour)

router.get('/' ,getAllTour)

router.get("/search/getFeaturedTours",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);



export default router;