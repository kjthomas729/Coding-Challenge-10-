// Load data from the CSV file and create list items
d3.csv("data/purchase_orders.csv").then(function(data) {
    // Select the unordered list
    const orderList = d3.select("#order-list");

    // Create a list item for each order
    orderList.selectAll("li")
        .data(data)
        .enter()
        .append("li")
        .text(d => `${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: $${d.purchaseAmount}`);
});
