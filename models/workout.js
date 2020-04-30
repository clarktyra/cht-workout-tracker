const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: String,
      trim: true,
      required: "Enter a type"
    },
    {
      name: String,
      trim: true,
      required: "Enter a name"
    },
    {
      duration: Number
    },
    {
      weight: Number
    },
    {
      reps: Number
    },
    {
      set: Number
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
