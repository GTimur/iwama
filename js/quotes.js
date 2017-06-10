const quotes = [
	{ 
		"quote" : "Роль человечества — достигать ниспосланных целей c чистым сердцем, находящимся в гармонии с мирозданием и любящим всё.", 
		"source" : "Морихэй Уэсиба"
	},
	{
		"quote" : "Сохраняйте свой разум светлым и чистым, как огромное небо, великий океан и самая высокая вершина, пустым от всех мыслей. Всегда сохраняйте ваше тело полным света и тепла. Заполните себя силой мудрости и просветления.", 
		"source" : "Морихэй Уэсиба"
	},
	{
		"quote" : "Прогресс приходит к тем, кто тренируется изо дня в день. Полагающиеся на секретные техники ни к чему не придут.", 
		"source" :  "Морихэй Уэсиба"
	},
	{
		"quote" : "Все законы неба и земли живут в тебе. Жизнь сама по себе есть истина, и это не изменится никогда. Всё сущее на небе и на земле дышит. Дыхание — это нить, связывающая всё мироздание воедино.", 
		"source" : "Морихэй Уэсиба"
	},
	{
		"quote" : "Не взирай на этот мир со страхом и отвращением. Смело смотри в лицо тому, что предлагают тебе боги.", 
		"source" : "Морихэй Уэсиба"
	},
	{
		"quote" : "Как только ты начинаешь искать «хорошее» и «плохое» в своих близких, в твоём сердце открывается дыра, через которую входит зломыслие. Если ты испытываешь других, соревнуешься с ними, критикуешь их — это приводит к твоему ослаблению и поражению.",
		"source" : "Морихэй Уэсиба"
	},
	{
		"quote" : "Цель тренировок — подтягивать ослабленное, тренировать тело и шлифовать дух.", 
		"source" : "Морихэй Уэсиба"
	},
	{
	"quote" : "В Искусстве Мира нет состязаний. Истинный Воин непобедим, поскольку он ни с кем не сражается. Нанести поражение означает поражение нашего собственного противоречивого ума.", 
	"source" : "Морихэй Уэсиба"
	},
	{
	"quote" : "Тебе не нужны дома, деньги, власть или положение, чтобы практиковать Искусство Мира. Небо — там, где ты сейчас стоишь, и это как раз то место, где можно тренироваться.", 
	"source" : "Морихэй Уэсиба"
	},
	{
	"quote" : "У каждого есть дух, который нужно совершенствовать; тело, которое должно быть тренировано; и путь, который должен быть пройден...", 
	"source" : "Морихэй Уэсиба"
	},

	{
	"quote" : "Жизнь — это мгновение за мгновением, и мера вашей жизни — то, как ваш дух расцветает в каждое из этих мгновений.", 
	"source" : "Морихэй Уэсиба"
	},
	{
	"quote" : "Правильная поза и осанка отражают должное состояние духа.", 
	"source" : "Морихэй Уэсиба"
	},
	{
	"quote" : "Техники требуют четырёх качеств, в которых отражается природа нашего мира. В зависимости от обстоятельств, ты должен быть: твёрдым, как алмаз, гибким, как ива, плавным, как течение воды, или пустым, как небо.", 
	"source" : "Морихэй Уэсиба"
	}

]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}

randomQuote();

document.querySelector("footer").addEventListener('click', randomQuote)

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
      });