    const questionBox1 = document.querySelectorAll(".questionBox")
  
    questionBox1.forEach((questionBox, index) => {
      const togglePlusBtn = questionBox.querySelector(".togglePlusBtn")
      const questionAnswer = questionBox.querySelector(".questionAnswer")
  

      if (togglePlusBtn) {
        togglePlusBtn.addEventListener("click", () => {
          toggleQuestion(questionAnswer, questionBox)
          console.log(`몇번째 박스냐? ${index}`)
        })
      }
    })
  
    function toggleQuestion(answer, box) {
      questionBox1.forEach((answerCard1) => {
        const questionAnswer = answerCard1.querySelector(".questionAnswer")
        if (questionAnswer && answerCard1 !== box) {
            questionAnswer.style.display = "none"
            answerCard1.classList.remove("open")
          }
          console.log("answer는",answer,"박스는",box, "card",answerCard1)
      })
  
      answer.style.display = (answer.style.display === "none" || answer.style.display === "") ? "block" : "none"
      box.classList.toggle("open")
  
      const toggleButton= box.querySelectorAll(".toggleBtn")
      toggleButton.forEach((btn) => {
        btn.innerText = answer.style.display === "none" ? "+" : "-"
      })
    }
  
  