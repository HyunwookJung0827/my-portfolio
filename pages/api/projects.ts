import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../libs/mongodb'; // Adjust the path to your MongoDB connection file
import Project from '../../models/Project'; // Adjust the path to your Mongoose model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase(); // Ensure the DB connection is established

  try {
    const projects = await Project.find();  // Fetch all projects
    console.log('Projects fetched:', projects);  // Log the fetched projects to see the data
    res.status(200).json(projects);  // Return the projects
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to load data' });
  }
}