export default function handler(req, res) {
    if (req.method === "POST") {
      const data = req.body;
      console.log("User Data:", data); // Logs data to Vercel's serverless function logs
      res.status(200).json({ message: "Data received and logged!" });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }