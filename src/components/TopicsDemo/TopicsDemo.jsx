import React from "react";
import "./TopicsDemo.css";

const topics = [
  "Natural sonlar qatori va raqamlar",
  "Ko‘p xonali son. Xona birliklari",
  "Natural sonlarni taqqoslash",
  "Natural sonlarni qo‘shish",
  "Qo‘shishning o‘rin almashtirish va guruhlash qonunlari",
  "Natural sonlarni ayirish",
  "Natural sonlarni ko‘paytirish",
  "Ko’paytirish qonunlari",
  "Natural sonlarni bo‘lish. Bo‘linmaning asosiy xossasi",
  "Bo’lakni topishga doir masalalar",
  "Qoldiqli bo‘lish",
  "Tenglama haqida tushuncha. Sodda tenglamalarni yechish",
  "Masalalar yechish",
  "Og'irlikka doir masalalar",
  "Vaqtga doir masalalar",
  "Yoshga doir masalalar",
  "Uzunlikka doir masalalar",
  "Kesma. To‘g‘ri chiziq. Nur. Parallel va perpendikular chiziqlar",
  "Son nuri. Koordinata",
  "Natural sonlarni yaxlitlash",
  "Yig'indiga va ayirmaga doir masalalar",
  "Ko'paytma va bo'linmaga doir masalalar",
  "Harakatga doir masalalar",
  "Ketma-ketlik",
  "Rim raqamlari",
  "Sonning darajasi. Sonning kvadrati va kubi",
  "To’g’ri to’rtburchak va kvadrat",
  "To’g’ri to’rtburchak va kvadratning yuzi. Yuza o’lchov birliklari",
  "Murakkab shakllarning perimetri va yuzi",
  "Sonli va harfli ifodalar",
  "Tenglama yechish",
  "Masalalarni tenglamalar tuzib yechish",
  "Tenglamalar sistemasi. Masalalarni tenglamalar sistemasi yordamida yechish",
  "Aylana va doira",
  "To'g'ri burchakli parallelepiped va kub",
  "Hajm o’lchov birliklari",
  "Bo'linish belgilari. Bo’luvchi va karrali",
  "Tub va murakkab sonlar",
  "Natural sonlarni tub ko‘paytuvchilarga ajratish",
  "Eng katta umumiy bo'luvchi (EKUB)",
  "Eng kichik umumiy karrali (EKUK)",
  "To'plamlar va Venn diagrammasi",
  "Kombinatorika va ehtimollik",
  "Kasr haqida tushuncha. To‘g‘ri va noto'g'ri kasrlar",
  "Kasrning asosiy xossasi. Kasrlarni qisqartirish",
  "Kasrlami umumiy maxrajga keltirish. Kasrlami taqqoslash",
  "Bir xil maxrajli kasrlarni qo‘shish va ayirish",
  "Har xil maxrajli kasrlarni qo‘shish va ayirish",
  "Aralash kasrlarni qo’shish va ayirish",
  "Oddiy kasrlarni ko'paytirish va bo'lish",
  "Sonning qismini topish. Qismiga ko’ra sonning o’zini topish",
  "O'nli kasrlar va ularni taqqoslash",
  "O'nli kasrlarni qo'shish, ayirish va ularni yaxlitlash",
  "O'nli kasrlarni ko'paytirsh va boʻlish",
  "Qism topishga doir masalalar",
  "Foizlar",
  "O'rta arifmetik qiymat",
  "Nisbat va Proporsiya",
  "Kombinatorika. Ehtimollik",
  "Ma'lumotlar tahlili. Grafiklar",
  "Ma'lumotlar tahlili. Jadvallar",
  "Ma'lumotlar tahlili. Diagrammalar",
  "Maksimum va minimum qiymatlar",
  "Ikki o’lchamli shakllar",
  "Uch o’lchamli shakllar"
];

const TopicsDemo = () => {
  return (
    <div className="topics-container">
      <h1 className="topics-title">📚 Matematika Mavzulari</h1>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <span className="topic-number">{index + 1}</span>
            <p className="topic-text">{topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsDemo;
