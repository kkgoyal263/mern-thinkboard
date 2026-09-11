export function formatDate(date) {
    console.log("formatDate received:", date);
    
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}