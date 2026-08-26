import mongoose from "mongoose";

const leaveApplicationSchema = new mongoose.Schema({
    employeeId: {type: mongoose.Schema.Types.ObjectId, ref:"Employee", required: true},
    type: {type: Strinf, enum: ["SICK", "CASUAL", "ANNUAL"], reuired: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    reson: {type: String, required: true},
    status: {type: String, enum: ["PENDING", "APPROVED", "REJECTED"], default: "PENDING"},
}, {timestamps: true})

const LeaveApplication = mongoose.models.LeaveApplication || mongoose.model("LeaveApplication", leaveApplicationSchema)

export default LeaveApplication;