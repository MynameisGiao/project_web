const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");


let userMessage;

const creatChatLi = (message, className) => {
    // Tạo chat <li> 
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}
const handleChat = () => {
    userMessage = chatInput.value.trim();
    // console.log(userMessage);
    if(!userMessage) return;

    // xuất hiện usermessage trên chatbox
    chatbox.appendChild(creatChatLi(userMessage, "outgoing"));
    
    setTimeout(() => {
        // Thinking...........
        chatbox.appendChild(creatChatLi("Đang nhập...", "incoming"));

    }, 600)
};
sendChatBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));