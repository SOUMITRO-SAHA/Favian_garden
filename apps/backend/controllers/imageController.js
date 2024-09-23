const axios = require("axios");
const FormData = require("form-data");

exports.generateImage = async (req, res) => {
  const { prompt } = req.body;

  const payload = {
    prompt: prompt || "A futuristic cityscape with flying cars and neon lights",
    output_format: "jpeg",
  };

  try {
    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
      axios.toFormData(payload, new FormData()),
      {
        responseType: "arraybuffer",
        headers: {
          Authorization: `sk-zBBnd2aANmDl63ClY2JRnR5BOQOZ6yJB6LmAwK97b1adOYjT`, // Replace with your actual API key
          Accept: "image/*",
        },
      }
    );

    if (response.status === 200) {
      // Convert the image buffer to Base64 format
      const base64Image = Buffer.from(response.data).toString("base64");
      res.status(200).json({ image: `data:image/jpeg;base64,${base64Image}` });
    } else {
      res.status(response.status).json({ error: response.data.toString() });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
