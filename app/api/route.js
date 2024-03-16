const LOCALHOST = "http://localhost:9999/";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("empId"));
  const empId = searchParams.get("empId");
  //   const employeeData = (await fetch(`${LOCALHOST}employee?${empId}`)).json();
  const employeeList = (await fetch(`${LOCALHOST}employees`)).json();

  return Response.json({
    employeeList: employeeList,
  });
}
