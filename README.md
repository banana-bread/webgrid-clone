# Webgrid Game Clone

This is a clone of Neuralink's Webgrid game, developed to measure the effectiveness of human BCI cursor control. This project is built for fun and educational purposes.

## About

The Webgrid game clone replicates the functionality of Neuralink's original Webgrid game. It is designed to provide a similar experience, allowing users to interact with a grid-based interface and test their cursor control precision.

### How BPS (Bits Per Second) is Calculated

In the game, your performance is measured using BPS (Bits Per Second). BPS is a way to quantify how much information you can process and how efficiently you can control the cursor. The calculation is based on two factors:

1. **Net Correct Targets per Minute (NTPM)**: This is the number of correct targets you hit, adjusted for the time it took.
2. **Grid Size**: The size of the grid (e.g., 4x4, 12x12) determines how much information is needed to select a target.

The formula for BPS is:

```
BPS = (Net Correct Targets / 60) × log2(Grid Size)
```

In simple terms, it measures how quickly and accurately you select targets, factoring in how complex the grid is.

You can play the clone [here](https://banana-bread.github.io/webgrid-clone/)
You can play the original Webgrid game [here](https://neuralink.com/webgrid/)
