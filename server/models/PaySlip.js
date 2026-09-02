import mongoose from "mongoose";

const payslipSchema = new mongoose.Schema({
    employeeid: {type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true},
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    basicSalary: { type: Number, required: true },
    allowances: { type: Number, default: 0},
    deductions: { type: Number, default: 0},
    netSalary: { type: Number, required: true },

}, {timestamps: true})

const Payslip = mongoose.models.Payslip || mongoose.model("Paylsip", payslipSchema)

export default Payslip;