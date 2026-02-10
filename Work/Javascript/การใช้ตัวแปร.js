<button onclick="runDemo()">Run Code</button>
<pre id="outputBox"></pre>

<script>
function runDemo() {
    console.clear();
    const output = [];

    // ตัวอย่างตัวแปร
    let studentName = 'สมชาย';
    let age = 20;
    let isStudent = true;
    const universityName = 'มหาวิทยาลัยเทคโนโลยี';

    // แสดงค่าตัวแปรเริ่มต้น
    output.push("ชื่อ: " + studentName);
    console.log("ชื่อ:", studentName);

    output.push("อายุ: " + age);
    console.log("อายุ:", age);

    // เปลี่ยนค่า let
    age = 21;
    output.push("อายุใหม่: " + age);
    console.log("อายุใหม่:", age);

    // เปลี่ยนค่า const (ตั้งใจให้ error)
    try {
        universityName = 'มหาวิทยาลัยใหม่';
    } catch (e) {
        output.push("Error: " + e.message);
        console.error(e.message);
    }

    // แสดงผลบนหน้าเว็บ
    document.getElementById("outputBox").textContent = output.join("\n");
}
</script>
