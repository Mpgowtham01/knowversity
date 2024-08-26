import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  json({
    limit: "25MB",
  })
);

//Admin
import aboutus from "./server/routes/aboutusRoutes.js";
import homestudent from "./server/routes/AdminRoutes/HomeStudentrouter.js";
import Fileds from "./server/routes/AdminRoutes/FieldsRouter.js";
import ourEmployee from "./server/routes/AdminRoutes/Resource/OurEmployeeRouter.js";
import ContactorStaffing from "./server/routes/AdminRoutes/Resource/ContactorStaffingRouter.js";
import contactus from "./server/routes/contactusRoutes.js";


import trainingCourse from "./server/routes/AdminRoutes/TrainingCourseRouter.js";
import Curriculum from "./server/routes/AdminRoutes/CurriculumRouter.js";


// adminLogo
import AdminLogo from "./server/routes/AdminLogoRoute.js";
//signup
import signup from "./server/routes/signupRoutes/StudentRouter.js";
import employee from "./server/routes/signupRoutes/ProfessionalRouter.js";
import employer from "./server/routes/signupRoutes/employerRouter.js";
import institute from "./server/routes/signupRoutes/instituteRouter.js";
import User from "./server/routes/signupRoutes/StudentRouter.js";
import College from "./server/routes/signupRoutes/CollegeRouter.js";
import admin from "./server/routes/signupRoutes/AdminloginRoutes.js";
import background from "./server/routes/signupRoutes/BackgroundVerificationRoutes.js";
import Vendor from "./server/routes/signupRoutes/VendorRoutes.js";
import EmployersEmployer from "./server/routes/signupRoutes/EmployersEmployeeRoutes.js";
import Trainersignup from "./server/routes/signupRoutes/TrainerRoutes.js";
//student
import student from "./server/routes/signupRoutes/StudentRouter.js";
import country from "./server/routes/country/Country.js";
import state from "./server/routes/state/State.js";
import district from "./server/routes/District/District.js";
import city from "./server/routes/City.js";
import area from "./server/routes/AreaRouter.js";
import studentPersonalData from "./server/routes/StudentRoutes/StudentRouter.js";
import gender from "./server/routes/StudentRoutes/StudentRouter.js";
import marital from "./server/routes/StudentRoutes/StudentRouter.js";
import mode from "./server/routes/StudentRoutes/StudentRouter.js";
import studentBlog from "./server/routes/StudentRoutes/StudentRouter.js";
import studentQualify from "./server/routes/StudentRoutes/StudentRouter.js"
//employer
import ourProfile from "./server/routes/employerRoute/OurProfileRoute.js";
import createForm from "./server/routes/employerRoute/CreateJobRoute.js";
import domainProfile from "./server/routes/employerRoute/domainRoute.js";
import subDomainProfile from "./server/routes/employerRoute/subDomainRoutes.js";
import interview from "./server/routes/employerRoute/interviewRoutes.js";
import period from "./server/routes/employerRoute/periodRoute.js";
import createSeminar from "./server/routes/employerRoute/createSeminarRoute.js";
import skill from "./server/routes/employerRoute/skillRoutes.js";
import projectpost from "./server/routes/employerRoute/ProjectpostRoute.js";
import technologyForm from "./server/routes/employerRoute/TechnologyRoute.js";
import KYC from "./server/routes/employerRoute/KYCrouter.js";
import traingCourse from "./server/routes/employerRoute/CourseRoute.js";

import Details from "./server/routes/employerRoute/DetailsRoute.js";
import contract from "./server/routes/employerRoute/ContractStaffRoute.js";
import ScheduleInterview from "./server/routes/employerRoute/ScheduleInterview.js";
import SelectedList from "./server/routes/employerRoute/SelectedListRoute.js";
import HoldList from "./server/routes/employerRoute/HoldListRoute.js";
import RejectList from "./server/routes/employerRoute/RejectListRoute.js";

//professional
import employeeUser from "./server/routes/signupRoutes/ProfessionalRouter.js";
import employerUser from "./server/routes/signupRoutes/employerRouter.js";
import instituteUser from "./server/routes/signupRoutes/instituteRouter.js";
import AdminBlog from "./server/routes/AdminRoutes/Adminrouter.js";
import Domain from "./server/routes/AdminRoutes/Domainrouter.js";
import Subdomain from "./server/routes/AdminRoutes/Subdomainrouter.js";
import Areaofinterest from "./server/routes/AdminRoutes/Areainterestrouter.js";
//professional
import ProfDetails from "./server/routes/ProfessionalRoutes/ProfessionalRoutes.js";
//seminar
import seminarpost from "./server/routes/instituteRoute/seminorpostroute.js";
import Seminar from "./server/routes/seminarRoute.js";
import Professional from "./server/routes/ProfessionalRoutes/ProfessionalRoutes.js";
// freeLancing
import freelancingPost from "./server/routes/freelancingRoutes/postForm.js";
import Blog from "./server/routes/AdminRoutes/BlogRouter.js";
import CompanyList from "./server/routes/AdminRoutes/CompanyListRouter.js";

// BGV
import EmployerBgv from "./server/routes/BgvRoutes/EmployerBgvRoutes.js";
import bgvProfile from "./server/routes/BgvRoutes/BgvProfileRoutes.js";
import bgvEduVerify from "./server/routes/BgvRoutes/BgvVerificationRoutes/BgvEducationRoute.js";
import bgvEmpVerify from "./server/routes/BgvRoutes/BgvVerificationRoutes/BgvEmployerRoutes.js";
import bgvPoliceVerify from "./server/routes/BgvRoutes/BgvVerificationRoutes/BgvPoliceRoutes.js";
// FreelancingCarousel
import FreelancingCarousel from "././server/routes/FreelancingCarouselRoutes/FreelancingCarouselRoutes.js";

import learning from "./server/routes/instituteRoute/Learningpost.js";

//Exam
import ExamPattern from "./server/routes/Exam/ExamPatternRoutes.js";
import QuestionBank from "./server/routes/Exam/QuestionBankRoutes.js";
import Technology from "./server/routes/Exam/TechnologyRoutes.js";
import Course from "./server/routes/Exam/CourseRoutes.js";

//college
import CollegeList from "./server/routes/CollegeRoutes/CollegeListRoute.js";
import University from "./server/routes/CollegeRoutes/UniversityRoute.js";
import Autonomous from "./server/routes/CollegeRoutes/AutonomousRoute.js";
import collegeProfile from "./server/routes/CollegeRoutes/collegeProfile.js";
import Seminor from "./server/routes/CollegeRoutes/SeminorRoutes.js";

import Student from "./server/routes/AdminRoutes/Studentrouter.js";

//Trainer
import ProfessionalDetails from "./server/routes/TrainerRoutes/TrainerDetailsRoutes.js"
import courseNotification from "./server/routes/NotificationRoutes/courseNotificationRoutes.js"

//offer

import Offer from "./server/routes/Vendor/OfferRouter.js";

import Advertisement from "./server/routes/Vendor/Advertisementroute.js";
import Internship from "./server/routes/employerRoute/InternshipRoutes.js";
//RN mobile
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));
import mobile_route from "./server/mobile/routes/image_route.js";
import path from "path";
//RN mobile route
app.use("/mobile", mobile_route);

//college
app.use("/college", CollegeList);
app.use("/university", University);
app.use("/automonous", Autonomous);
app.use("/collegeprofile", collegeProfile);

import Batch from "./server/routes/Exam/BatchRoutes.js";
import Trainer from "./server/routes/Exam/TrainerRoutes.js";
//signup
app.use("/signup", signup);
app.use("/employee", employee);
app.use("/trainer",Trainersignup)
app.use("/employer", employer);
app.use("/institute", institute);
app.use("/college", College);
app.use("/admin", admin);
app.use("/background", background);
app.use("/vendor", Vendor);
app.use("/employersemployee", EmployersEmployer);
//login page
app.use("/users", User);
app.use("/employeeUser", employeeUser);
app.use("/employerUser", employerUser);
app.use("/instituteUser", instituteUser);

//student
app.use("/student", student);
app.use("/country", country);
app.use("/state", state);
app.use("/district", district);
app.use("/city", city);
app.use("/area", area);
app.use("/gender", gender);
app.use("/studentdata", studentPersonalData);
app.use("/marital", marital);
app.use("/mode", mode);
app.use("/blog", studentBlog);
app.use("/studentdata", studentQualify);

//employer
app.use("/ourprofile", ourProfile);
app.use("/createForm", createForm);
app.use("/domainProfile", domainProfile);
app.use("/subDomainProfile", subDomainProfile);
app.use("/technologyForm", technologyForm);
app.use("/scheduleinterview", interview);
app.use("/noticeperiod", period);
app.use("/traingCourse", traingCourse);

// app.use("/createSeminar", createSeminar);
app.use("/skills", skill);
app.use("/projectpost", projectpost);
app.use("/kyc", KYC);
app.use("/details", Details);
app.use("/schedule", ScheduleInterview);
app.use("/selected", SelectedList);
app.use("/hold", HoldList);
app.use("/reject", RejectList);
app.use("/Internship", Internship);

//institute
app.use("/contract", contract);
// app.use("/institute", seminarpost);
app.use("/AdminBlog", AdminBlog);
app.use("/domain", Domain);
app.use("/subdomain", Subdomain);
app.use("/areaofinterest", Areaofinterest);
app.use("/aboutus", aboutus);
app.use("/homestudent", homestudent);

////Professional
app.use("/professional", Professional);
app.use("/companylist", CompanyList);
app.use("/profdetails", ProfDetails);

//Trainer
app.use("/trainerinfo",ProfessionalDetails);
app.use("/notification", courseNotification);

// blog
app.use("/blog", Blog);

//institute
app.use("/learningpost", learning);

//ExamPattern
app.use("/ExamPattern", ExamPattern);
app.use("/QuestionBank", QuestionBank);
app.use("/Technology", Technology);
app.use("/Course", Course);
app.use("/Batch", Batch);
app.use("/Trainer", Trainer);

//admin
app.use("/AdminBlog", AdminBlog);
app.use("/domain", Domain);
app.use("/subdomain", Subdomain);
app.use("/areaofinterest", Areaofinterest);
app.use("/fields", Fileds);
app.use("/ResourceOurEmployee", ourEmployee);
app.use("/ResourceContactorStaffing", ContactorStaffing);
app.use("/contactus",contactus);


app.use("/courses", trainingCourse);
app.use("/curriculum", Curriculum);

// AdminLogo
app.use("/adminLogo", AdminLogo);

//seminar
app.use("/seminar", Seminar);

// app.use("/Seminor", Seminor);

// freeLancing
app.use("/freelancingPost", freelancingPost);
app.use("/public", express.static(process.cwd() + "/public"));

//BGV
app.use("/bgvemp", EmployerBgv);
app.use("/bgvEduVerify", bgvEduVerify);
app.use("/bgvEmpVerify", bgvEmpVerify);
app.use("/bgvPoliceVerify", bgvPoliceVerify);

//bgv Profile
app.use("/bgvProfile", bgvProfile);
// freelancingCarousel
app.use("/FreelancingCarousel", FreelancingCarousel);

//Student
app.use("/Student", Student);

//vendor
app.use("/Vendor", Vendor);

//Offer
app.use("/Offer", Offer);

// app.use("/Advertisement", Advertisement);
app.use("/Advertisement", Advertisement);

export default app;
