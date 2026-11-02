const express = require("express");
const app = express();

app.use(express.json());
let profiles = [];
let applications = [];

app.post("/create-profile", (req, res) => {
  const { name, email, phone, skills } = req.body;

  const profile = {
    id: profiles.length + 1,
    name,
    email,
    phone,
    skills,
  };

  profiles.push(profile);

  res.status(201).json({
    success: true,
    message: "Profile created successfully",
    profile,
  });
});

app.delete("/delete-profile/:id", (req, res) => {
  const id = Number(req.params.id);

  const profile = profiles.find(
    (profile) => profile.id === id
  );

  if (profileIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Profile not found",
    });
  }});
   
   profiles.splice(profileIndex, 1);

  res.json({
    success: true,
    message: "Profile deleted successfully",
  });
