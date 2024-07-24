import Education from "../components/eduaction";
import Foto from "../assets/Foto.jpg";
import ProjectCard from "../components/project-card";

interface Education {
  nameschool: string;
  year: string;
  description: string;
}
interface Project {
  name: string;
  year: string;
  description: string;
}
const LandingPage = () => {
  const education: Education[] = [
    {
      nameschool: "SMA N 1 Kota Solok",
      year: "2015 - 2018",
      description: "Saya menempuh jenjang pendidikan di SMA N 1 Kota Solok dengan jurusan IPA",
    },
    {
      nameschool: "Universitas Negeri Padang",
      year: "2018 - 2023",
      description: "Saya berkuliah di Universitas Negeri Padang dengan Program Studi Pendidikan Teknik Informatika dan Komputer",
    },
  ];
  const project: Project[] = [
    {
      name: "Pengolahan data dan Validasi Entri",
      year: "Januari 2022 - Maret 2022",
      description: "Bertanggung jawab menginput data ke dalam perangkat lunak yang berbasis data dan memeriksanya untuk memastikan apakah data yang telah dimasukkan akurat dan Bertanggung jawab memeriksa dan memperbaiki kesalahan data atau dokumen",
    },
    {
      name: "Sensus Pertanian 2023",
      year: "Juni 2023 - Juli 2023",
      description: "Melakukan pendataan lapangan tentang Sensus Pertanian 2023 dengan menggunakan metode CAPI(Computer Assisted Personal Interview).",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="flex flex-row justify-evenly items-center m-5">
        <div className="flex flex-col">
          <h1 className=""> Hallo</h1>
          <h1 className="font-semibold text-4xl">I'm Tegar</h1>
          <h1 className="font-semibold py-2">
            Seorang Pemuda yang taat beribadah
            <div className=""> & taat peraturan</div>
          </h1>
        </div>
     <img src={Foto} alt="" className="rounded-md"
      style={{
        width : "10rem",
        height : "15rem",
        objectFit : "cover",
        borderRadius : "0.5 rem",
      }}/>
      </section>
      <section className="flex flex-col px-5 py-8 gap-2  bg-[#77E4C8]  rounded-2xl">
        <label className="font-semibold text-lg">Summary</label>
        <p className="text-base text-justify">
        Lulusan Sarjana Jurusan Teknik Elektronika dengan program studi pendidikan teknik informatika
dan computer. Berorientasi pada detail, ketepatan, dan hasil yang baik. Seorang pekerja keras,
mampu bekerja dibawah tekanan, sebagai tim maupun individu serta dapat diandalkan, siap
belajar lebih dan memanfaatkan keterampilan yang saya miliki untuk berkarir.
        </p>
      </section>
      <section className="flex flex-col px-5 py-10 gap-5 ">
        <label className="font-semibold text-lg rounded-2xl">Project</label>
        {project.map((item: Project, index: number) => (
          <ProjectCard
            key={index}
            name={item.name}
            year={item.year}
            description={item.description}
            bgColor={`${index % 2 === 0 ? "bg-[#E6B9A6]" : ""}`}
          />
        ))}
      </section>
      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="font-semibold text-lg">Education</label>
        {education.map((item: Education, index: number) => (
          <Education
            key={index}
            nameschool={item.nameschool}
            year={item.year}
            description={item.description}
            bgColor={`${index % 2 === 0 ? "bg-[#E6B9A6]" : ""}`}
          />
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
