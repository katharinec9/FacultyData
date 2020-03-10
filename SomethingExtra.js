d3.select("body")
    .selectAll("img")
    .data(employees)
    .enter()
    .append("img")
    .attr("src", function(employee)
    {
    console.log(employee.photo);
    return employee.photo;
}
         )
.on("click", function(employee)
{
    d3.select(this).remove();
    
    })

