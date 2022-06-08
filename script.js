const html = function (body) {
  const element = document.createElement("template")
  element.innerHTML = body
  return element.content.firstElementChild
}

const gallery = document.getElementById(`gallery`)

for (let i = 0; i < 5; i++) {
  const element = html(/*html*/ `
    <div class="imageContainer">
      <h1>Header</h1>
      <img src="https://picsum.photos/1000/400?random=${i}" alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, quod?</p>
    </div>
  `)

  element.onclick = () => {
    gallery.classList.toggle("active")
  }

  gallery.append(element)
}
