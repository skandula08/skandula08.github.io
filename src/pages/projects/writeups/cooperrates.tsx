interface EndpointMethod {
  description: string;
  users?: number[];
  userStory?: string;
}

interface Endpoint {
  resource: string;
  get?: EndpointMethod;
  post?: EndpointMethod;
  put?: EndpointMethod;
  delete?: EndpointMethod;
}

const endpoints: Endpoint[] = [
  {
    resource: "Resource",
    get: {
      description: "GET",
    },
    post: {
      description: "POST",
    },
    put: {
      description: "PUT",
    },
    delete: {
      description: "DELETE",
    },
  },
  {
    resource: "/student",
    get: {
      description: "Retrieve a list of all students.",
      users: [3, 4],
      userStory: "Monitor students.",
    },
    post: {
      description: "Create a new student account.",
      users: [3, 4],
      userStory: "Signup a new student.",
    },
  },

  {
    resource: "/student/{id}",
    get: {
      description:
        "Retrieve student details for {id} (major, college, email, etc.)",
      users: [1, 2, 3, 4],
      userStory: "Display student profile.",
    },
    put: {
      description: "Update student details for {id}.",
      users: [1, 2, 3, 4],
      userStory: "Update profile.",
    },
    delete: {
      description: "Delete a student account.",
      users: [3, 4],
      userStory: "Delete a student's account.",
    },
  },

  {
    resource: "/student/{id}/jobs",
    post: {
      description: "Add a job application for a specific student.",
      users: [3, 4],
      userStory: "Add a job a student has done to their profile.",
    },
  },

  {
    resource: "/administration/return_offer_percentage",
    get: {
      description: "Retrieve the percentage of jobs offering a return offer.",
      users: [3],
      userStory: "Assess how many employers offer return offers.",
    },
  },

  {
    resource: "/administration/total_students",
    get: {
      description: "Retrieve the total number of students.",
      users: [3],
      userStory: "View total number of students to monitor usage.",
    },
  },

  {
    resource: "/administration/total_jobs",
    get: {
      description: "Retrieve the total number of jobs.",
      users: [3],
      userStory: "View total jobs to monitor applications.",
    },
  },

  {
    resource: "/administration/total_reviews",
    get: {
      description: "Retrieve the total number of reviews.",
      users: [3],
      userStory: "View total reviews to monitor usage and statistics.",
    },
  },

  {
    resource: "/administration/total_employers",
    get: {
      description: "Retrieve the total number of employers.",
      users: [3],
      userStory: "Keep track of total employers.",
    },
  },

  {
    resource: "/administration/jobs_by_category",
    get: {
      description: "Retrieve the total number of jobs within each category.",
      users: [3],
      userStory: "Keep track of the number of jobs within each category.",
    },
  },

  {
    resource: "/job",
    get: {
      description:
        "Retrieve all jobs (option to filter based on certain attributes).",
      users: [1, 2, 3, 4],
      userStory: "View job postings and opportunities.",
    },
    post: {
      description: "Add a new job listing.",
      users: [3, 4],
      userStory: "Add a new available job posting.",
    },
  },

  {
    resource: "/job/{jobID}",
    get: {
      description: "Retrieve detailed information for {jobID}.",
      users: [1, 2, 3, 4],
      userStory: "View details of a specific job posting.",
    },
    put: {
      description: "Update an existing job by {jobID}.",
      users: [3, 4],
      userStory: "Update information for an existing job posting.",
    },
    delete: {
      description: "Delete a specific job by {jobID}.",
      users: [3, 4],
      userStory: "Delete a job posting that is no longer available.",
    },
  },

  {
    resource: "/jobs/starred/{id}",
    get: {
      description:
        "Get all jobs that have been starred by a student with {id}.",
      users: [1, 2],
      userStory: "A student can view all the jobs they have starred.",
    },
    post: {
      description:
        "Star a job that a student likes and wants to save for future reference.",
      users: [1, 2],
      userStory: "Star a job.",
    },
    delete: {
      description: "Delete a starred job.",
      users: [1, 2],
      userStory: "Delete a job starred by a student.",
    },
  },

  {
    resource: "/jobs/employer/{jobID}",
    get: {
      description:
        "Get the name of the employer for a job posting with {jobID}.",
      users: [1, 2, 3, 4],
      userStory: "Display the name of the employer of a job posting.",
    },
  },

  {
    resource: "/jobs/student/{NUID}",
    get: {
      description:
        "Get all jobs a student is doing or has done using their NUID.",
      users: [1, 2, 3, 4],
      userStory:
        "View the jobs done by a student in the work experience section of their profile.",
    },
    post: {
      description:
        "Star a job that a student likes and wants to save for future reference.",
      users: [1, 2],
      userStory: "Star a job.",
    },
  },

  {
    resource: "/jobs/averageRating/{jobID}",
    get: {
      description:
        "Get the average overall satisfaction rating for a job based on reviews left for that job.",
      users: [1, 2, 3, 4],
      userStory: "See the overall rating for a job listed.",
    },
  },

  {
    resource: "/jobcategory",
    get: {
      description: "Retrieve all job categories.",
      users: [1, 2, 3, 4],
      userStory:
        "View job categories, related statistics, and the category a job belongs to.",
    },
    post: {
      description: "Add a new job category.",
      users: [3, 4],
      userStory: "Add a new job category.",
    },
  },

  {
    resource: "/jobcategory/{jobCategoryID}",
    get: {
      description: "Retrieve all jobs under {jobCategoryID}.",
      users: [1, 2, 3, 4],
      userStory: "View all jobs available in a specific category.",
    },
    delete: {
      description: "Delete a specific job category by {jobCategoryID}.",
      users: [3, 4],
      userStory: "Delete a job category.",
    },
  },

  {
    resource: "/employer",
    get: {
      description: "Retrieve all employers.",
      users: [1, 2, 3, 4],
      userStory: "View employers tailored to your needs.",
    },
    post: {
      description: "Add a new employer.",
      users: [3, 4],
      userStory: "Add a new employer.",
    },
  },

  {
    resource: "/employer/{employerID}",
    get: {
      description: "Retrieve detailed information for {employerID}.",
      users: [1, 2, 3, 4],
      userStory: "View details of a specific employer.",
    },
    put: {
      description: "Update an existing employer's information by {employerID}.",
      users: [3, 4],
      userStory: "Update employer information.",
    },
    delete: {
      description: "Delete a specific employer by {employerID}.",
      users: [3, 4],
      userStory: "Delete an employer no longer offering jobs.",
    },
  },

  {
    resource: "/employers/{id}/jobs",
    get: {
      description: "Get all jobs listed by a specific employer.",
      users: [1, 2, 3, 4],
      userStory: "View jobs listed by an employer.",
    },
  },

  {
    resource: "/employer/starred/{NUID}",
    get: {
      description: "Get all employers starred by a student with {NUID}.",
      users: [1, 2],
      userStory: "Students can view employers they have saved/starred.",
    },
    post: {
      description: "Star an employer.",
      users: [1, 2],
      userStory: "Students can star an employer they like.",
    },
    delete: {
      description: "Delete a starred employer.",
      users: [1, 2],
      userStory: "Students can remove an employer they had starred.",
    },
  },

  {
    resource: "/employer/{employerID}/jobs/total",
    get: {
      description:
        "Get the total number of jobs listed by a specific employer.",
      users: [1, 2, 3, 4],
      userStory: "View the total jobs listed by an employer.",
    },
  },

  {
    resource: "/employer/{employerId}/jobs",
    get: {
      description: "Get all jobs listed by an employer with {employerId}.",
      users: [1, 2],
      userStory:
        "A student can search employers and view the jobs listed by them.",
    },
  },

  {
    resource: "/review",
    get: {
      description: "Retrieve all reviews.",
      users: [1, 2, 3, 4],
      userStory: "View all reviews left by past co-ops on jobs and employers.",
    },
    post: {
      description: "Add a review.",
      users: [1, 2],
      userStory: "Add a review on a completed co-op.",
    },
  },

  {
    resource: "/review/{reviewID}",
    get: {
      description: "Retrieve detailed information for {reviewID}.",
      users: [1, 2, 3, 4],
      userStory: "View details of a review.",
    },
    put: {
      description: "Update an existing review by {reviewID}.",
      users: [1, 2],
      userStory: "Update a review.",
    },
    delete: {
      description: "Delete a specific review by {reviewID}.",
      users: [1, 2],
      userStory: "Delete a review.",
    },
  },

  {
    resource: "/review/student/{NUID}",
    get: {
      description: "Get all reviews written by a student with {NUID}.",
      users: [1, 2],
      userStory: "View reviews written by a student on their profile.",
    },
  },

  {
    resource: "/review/job/{jobID}",
    get: {
      description: "Get all reviews written for a job given {jobID}.",
      users: [1, 2],
      userStory: "View all reviews written for a job below the job posting.",
    },
  },

  {
    resource: "/review/starred/{NUID}",
    get: {
      description: "Get all reviews starred by a student with {NUID}.",
      users: [1, 2],
      userStory: "View all reviews a student has saved.",
    },
    post: {
      description: "Star a review for a student.",
      users: [1, 2],
      userStory: "Students can save reviews they find helpful or like.",
    },
    delete: {
      description: "Delete a starred review for a student.",
      users: [1, 2],
      userStory: "Students can remove starred reviews.",
    },
  },

  {
    resource: "/flaggedcontent",
    get: {
      description: "Retrieve all flagged reviews.",
      users: [3, 4],
      userStory: "View all content that has been flagged for review.",
    },
    post: {
      description: "Add a review as flagged content.",
      users: [3],
      userStory: "Advisors can flag a review for inappropriate content.",
    },
  },
  {
    resource: "/flaggedcontent/{flagID}",
    get: {
      description:
        "Retrieve information on specific content flagged by {flagID}, including reason, review, date, and related details.",
      users: [3, 4],
      userStory:
        "View details on when, why, and which review has been flagged.",
    },
    delete: {
      description: "Delete flags for a review by {flagID}.",
      users: [4],
      userStory: "Remove flags left on a review.",
    },
  },

  {
    resource: "/notifications",
    post: {
      description:
        "Create a notification for a specific student (job status updates, alerts, etc.).",
      users: [3],
      userStory: "Advisors can send students notifications.",
    },
  },

  {
    resource: "/notifications/{NUID}",
    get: {
      description: "Get all notifications for a student with {NUID}.",
      users: [1, 2],
      userStory:
        "A student can view all notifications they have received from an advisor.",
    },
  },
];

export default function cooperrates() {
  return (
    <div className="writeup text-left w-5/6 m-auto text-lg">
      <h2> CO-OPer Rates: </h2>
      <button className="live-link-button">
        <a href="https://drive.google.com/file/d/1hU1fNoD_DsAFBhvM4VpBGR96NvoHJAwY/view?usp=share_link" target="empty">
          Link to Demo Video
        </a>
      </button>
      <h2>Project Overview </h2>
      CO-OPer Rates is a data-driven application that focuses on student
      experiences and opinions within the Co-op and early career space. Students
      can leave reviews for their co-op positions that other students can view,
      save, and use to inform their own decision-making about co-ops to apply
      to, career paths to pursue, and employers to network with and apply for
      jobs with. Our UI focuses on students searching for co-ops/viewing
      reviews, students leaving reviews for co-op experiences, co-op advisors,
      and systems/database administrators for the application. This project was
      completed as a final project at Northeastern University's CS3200 class.
      <img src="/assets/cooperrates_cover.png" />
      <h2> Features </h2>
      <h4> Students can... </h4>
      <ul>
        <li>View feedback from past students on specific co-op roles </li>
        <li>
          {" "}
          See notifications pertaining to jobs, reviews, applications, and
          relevant information{" "}
        </li>
        <li> Track the status of applications submitted</li>
        <li>
          {" "}
          Bookmark preferred companies, co-op roles, and specific reviews
        </li>
        <li> View a co-op job postings board</li>
        <li> Aaccess a network of company and co-op position alumni </li>
        <li>
          {" "}
          Update and maintain a profile to highlight relevant skills, career
          interests and experiences
        </li>

        <li> Easily complete an evaluation of co-op experiences</li>
        <li> Access existing reviews and details about co-op companies</li>
        <li>
          {" "}
          See which companies offer employment after the co-op or where alumni
          are currently working
        </li>
        <li> Make changes or remove reviews</li>
        <li> Make contact details available </li>
        <li>
          Add or edit personal details on their profile, such as skills or
          experience
        </li>
      </ul>
      <h2>Global ER Diagram </h2>
      <img src="/assets/cooperrates_er_diagram.png" />
      <h2> Relational Database Diagram </h2>
      <img src="/assets/cr_rd_diagram.png" />
      <h2> Preliminary Designs </h2>
      <i>
        Though Streamlit has it's own, rather rigid component system, I tooks
        some time to wireframe an ideal interface for our product
      </i>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="100%"
        height="450"
        src="https://embed.figma.com/design/c6GZRQPXCnErwOmOqSzvv4/Database-Design-project?node-id=0-1&embed-host=share"
      ></iframe>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="100%"
        height="450"
        src="https://embed.figma.com/design/c6GZRQPXCnErwOmOqSzvv4/Database-Design-project?node-id=17-119&embed-host=share"
      ></iframe>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="100%"
        height="450"
        src="https://embed.figma.com/design/c6GZRQPXCnErwOmOqSzvv4/Database-Design-project?node-id=34-2&embed-host=share"
      ></iframe>
      <h2>Project Components </h2>
      There are three major components which will each run in their own Docker
      Containers: - Streamlit App in the `./app` directory - Flask REST api in
      the `./api` directory - SQL files for your data model and data base in the
      `./database-files` directory ## Project Tech Stack
      <ul>
        <li> Frontend: Streamlit framework </li>
        <li> Backend: Python, Flask </li>
        <li> Database: MySQL </li>
        <li> Containerization: Docker containers </li>
      </ul>
      <h2> API Endpoints Matrix </h2>
      <tbody className="w-full table-fixed border-collapse">
        {/* <thead>
    <th>Resource</th>
    <th>GET</th>
    <th>POST</th>
    <th>PUT</th>
    <th>DELETE</th>
  </thead> */}
        {endpoints.map((endpoint) => (
          <tr key={endpoint.resource}>
            <td>{endpoint.resource}</td>

            <td>{endpoint.get?.description ?? "n/a"}</td>
            <td>{endpoint.post?.description ?? "n/a"}</td>
            <td>{endpoint.put?.description ?? "n/a"}</td>
            <td>{endpoint.delete?.description ?? "n/a"}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
