# Harnessing AI For Resumes
As someone who has been actively applying for jobs, I've noticed a concerning trend across the Tech/IT job market. Graduates are struggling to land their first roles, and even experienced professionals are finding it difficult to secure new opportunities. On top of this, many job seekers are applying to hundreds of roles daily, but the competition is fierce. With this in mind, I decided to take a closer look at how I could make my own resume stand out from the crowd. The solution, I realized, was simple: harness the power of AI to enhance my job application process. Using my skills as a programmer, I decided to leverage AI to automate and optimize the creation of tailored resumes for each job application.
To achieve this, I’m utilizing OpenAI to transcribe job listings and generate formatted JSON data that can be used to create a CV. By doing so, I’m streamlining the process, ensuring that each resume is personalized to the job description, thus increasing my chances of getting noticed by hiring managers.
# Backend
For the backend of this project, I chose to use Next.js. As it’s a framework I’ve been working with recently, I felt it would be a good opportunity to strengthen my knowledge and apply it in a real-world scenario. The project’s scope is simple enough to serve as a testing ground for my skills, while also reinforcing the concepts I’ve been learning about Next.js. Additionally, it provides me with the flexibility to scale the project later on if necessary.
# Frontend
On the frontend, I’m using React, combined with Tailwind CSS and Shadcn UI. React is an excellent choice for building user interfaces, and with Tailwind, I can quickly and efficiently style the application. Shadcn UI, which has gained massive adoption, offers a sleek, customizable, and fast UI kit that integrates perfectly with Tailwind and React. Using these technologies together, I’m able to craft a smooth and visually appealing user experience for anyone looking to generate their resumes.
# Core Logic
As of writing this, I’ve completed the core concept of the project, though there are still a few finishing touches to apply, such as additional styling and refining certain features. However, the fundamental structure is already in place, and I’ve managed to build the three core components that make the app functional:

## Open AI
The AI component is the heart of the project. Given that OpenAI leads the way in AI technology, it made perfect sense to integrate their tools into my solution. Using OpenAI’s API, I’m able to communicate with GPT-3.5, providing me with a lightweight and efficient way to process job listings and generate tailored resume content. This approach also eliminates the need to run a large language model (LLM) locally on the user’s machine, which would be resource-intensive.

I use simple prompt engineering to interact with the API, sending a POST request to OpenAI’s servers, which then processes the input and returns a raw output that I can use. Here’s a simplified code snippet that demonstrates how I’m integrating OpenAI:
```typescript
await fetch("https://api.openai.com/v1/chat/completions", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
	},
	body: JSON.stringify({
		model: "gpt-3.5-turbo",
		messages: [
			{'role':'system', content: content,}
		],
	}),
});

```
This setup allows me to interact with GPT-3.5 and retrieve tailored responses that help generate the content for resumes based on the job description.
## Generating Resume
The resume generation process starts with the user providing key points about their personal information, education, and other relevant details. The AI model will then use these inputs to generate a more refined and job-specific resume. Here’s a basic example of what the input JSON structure looks like:
```json
{
  "details": {
      "Name": "Dominic Example",
      "Contact": [
        "England, Example, Example",
        "hello@Example.dev",
        "www.Example.dev"
      ],
      "Education": [
        {
          "Institution":"Example College",
          "Location":"Example, Example, England",
          "Subject":"Extended Diploma IT",
          "Graduation": "Aug 2024"
        },
        {
          "Institution":"Example School",
          "Location":"Example, Example, England",
          "Subject":"Entry Level 3 for IT",
          "Graduation": "Aug 2022"
        }
      ]
  }
}
```
Please note, this is just a simplified version of the input. The actual user input can be more detailed and tailored to reflect specific achievements, skills, and other aspects relevant to the job they are applying for.

Using this information as a base, the AI model fills in the gaps and fine-tunes the resume to match the specific requirements of the job listing. Through effective prompt engineering, the AI adapts the content to align with the job description, providing users with resumes that are more likely to capture the attention of hiring managers.
## Downloading The Resume
Once the resume is generated, I want users to be able to download it in a clean, formatted PDF. To achieve this, I’m using two powerful libraries: `html2canvas` and `jspdf`. These libraries make it easy to convert HTML content into a downloadable PDF format. Here’s how the process works:

1. The resume is rendered on the screen as HTML.
2. The `html2canvas` library captures the content and renders it as an image.
3. Then, `jspdf` takes this image and generates a PDF that can be downloaded directly by the user.

This allows for a smooth user experience, where users can quickly generate and download a professional resume that is tailored to the job they’re applying for.

# Final Thoughts
This project is a great way for me to combine my programming skills with the power of AI to solve a real-world problem. By automating the process of generating tailored resumes, I’m not only streamlining my own job applications but also helping others stand out in an increasingly competitive job market. I believe AI will continue to play a key role in shaping the future of recruitment, and this is just the beginning. As I continue to refine this project, I look forward to seeing how AI can further enhance job seekers' chances of landing their dream job.