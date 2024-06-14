const mongoose = require("mongoose");

const employeeUser = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    address:{
      type: String,
      default: "",
    },
    status:{
      type: String,
      enum:["register","step1","step2","complete"],
    },
    employeeVisibility:{
      type:String,
      enum: ["visible","invisible"]
    },
    email: {
      type: String,
      default: "",
    },
    phoneNumber:{
      type: String,
      default: "",
    },
    degree:[
      {
        degreeType:{
          type:String,
          default:""
        },
        fieldOfStudy:{
          type:String,
          default:""
        },
        institutionName:{
          type:String,
          default:""
        },
        location:{
          type:String,
          default:""
        },
        description:{
          type:String,
          default:""
        },
        timeOfJoin:{
          startDate:{
            type:String,
            default:""
          },
          endDate:{
            type:String,
            default:""
          }
        }
      }
    ],
    job:[
      {
        title:{
          type:String,
          default:""
        },
        company:{
          type:String,
          default:""
        },
        location:{
          type:String,
          default:""
        },
        description:{
          type:String,
          default:""
        },
        timeOfJoin:{
          startDate:{
            type:String,
            default:""
          },
          endDate:{
            type:String,
            default:""
          }
        },
        currentWork:{
          type:Boolean,
          default:false
        }
      }
    ],
    password: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('EmployeeUser',employeeUser)
