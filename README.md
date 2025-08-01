# Trip and Drip

Trip and Drip is a creative and imaginative web app that takes any two user-provided inputs—such as an artist and a mood—and generates unique suggestions for:

- Travel Destinations (Trip tab)
- Fashion Inspirations (Drip tab)

From aesthetic getaways to curated style ideas, Trip and Drip transforms your cultural inputs into thoughtful recommendations.

## Live Demo

You can try the app here:  
https://trip-and-drip.vercel.app/

## Features

- Custom Input Suggestions  
  Enter any two concepts (e.g., "Coldplay" + "Sunset") and get meaningful suggestions.

- Trip Tab  
  Suggests travel destinations inspired by your input combination.

- Drip Tab  
  Generates fashion outfit ideas based on the input theme.

- AI-Powered Results  
  Uses Google's Gemini API to generate creative and relevant suggestions.

- Taste AI™ Integration
  Powered by Qloo API to intelligently match user inputs with culture-aware entities.

- Fully Frontend  
  Built entirely with Next.js and deployed on Vercel. No backend required.

## How It Works

1. **User Input**  
   Enter any two concepts (e.g., "Coldplay" + "Sunset").

2. **Semantic Matching (Qloo API)**  
   Qloo’s Taste AI™ API returns related cultural entities for both inputs.

3. **Theme Generation (Gemini API)**  
   These entities are passed to Gemini to generate a creative Trip or Drip suggestion.

4. **Refined Results (Qloo API)**  
   The generated suggestion is searched again via Qloo to surface culturally relevant, real-world results.

5. **Display**  
   Final curated suggestions are shown instantly in a responsive UI.


## Tech Stack

| Layer         | Technology                 |
|---------------|----------------------------|
| Framework     | Next.js                    |
| Styling       | CSS (<style jsx>)          |
| AI API        | Gemini API (by Google)     |
| Taste Mapping | Qloo Taste AI™ API         |
| Deployment    | Vercel                     |





