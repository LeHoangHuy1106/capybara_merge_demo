// Biến cờ để kiểm soát số lần gọi
window.gameStarted = false;
window.gameEnded = false;

// Khi game sẵn sàng, gọi gameReady
function gameReady() {
    console.log("Game đã sẵn sàng!");
    window.gameReady && window.gameReady();
}

// Khi game bắt đầu
function gameStart() {
    if (!window.gameStarted && !window.gameEnded) {
        console.log("Bắt đầu game!");
        console.trace(); // Kiểm tra xem hàm bị gọi từ đâu
        window.gameStart && window.gameStart();
        window.gameStarted = true; // Đánh dấu đã gọi
    }
}

// Khi game kết thúc (thắng hoặc thua)
function gameEnd() {
    if (window.gameStarted && !window.gameEnded) {
        console.log("Kết thúc game!");
        window.gameEnd && window.gameEnd();
        window.gameEnded = true; // Đánh dấu đã gọi
    }
}

// Khi người chơi bấm tải game
function downloadGame() {
    console.log("Người chơi bấm tải game!");
    window.install && window.install();
}

// Khi người chơi muốn chơi lại
function gameRetry() {
    console.log("Người chơi muốn chơi lại!");
    window.gameRetry && window.gameRetry();
    
    // Reset trạng thái để có thể bắt đầu lại
    window.gameStarted = false;
    window.gameEnded = false;
    gameStart();
}

// Khi game đóng
function gameClose() {
    console.log("Game đóng!");
    window.gameClose && window.gameClose();
}

// Đảm bảo chỉ hiển thị nút tải game sau 30 giây
let downloadButtonDisplayed = false;

