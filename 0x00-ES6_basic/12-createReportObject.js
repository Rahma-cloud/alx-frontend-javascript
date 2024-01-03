export default function createReportObject(employeesList) {
    const result = {
        allEmployees: { ...employeesList },
        getNumberOfDepartments(employees) {
            const departments = new Set(Object.keys(employees));
            return departments.size;
        },
    };
    
    return result;
}
