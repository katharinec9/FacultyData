var ol = d3.select("body").append('ol')
    ol.selectAll("li")
    .data(employees)
    .enter()
    .append("li")
    .text(function(employees)
       {
    console.log(employees.lastName);
    return employees.lastName;
}
         )
