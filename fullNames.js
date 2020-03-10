d3.select("body")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(function(employees)
       {
    console.log(employees.firstName);
    return employees.firstName+" "+employees.lastName;
}
         )
