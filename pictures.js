d3.select("body")
    .selectAll("img")
    .data(employees)
    .enter()
    .append("img")
    .attr("src", function(employees)
       {
    console.log(employees.photo);
    return employees.photo;
}
         )
