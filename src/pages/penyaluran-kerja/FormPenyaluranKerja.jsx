import React from "react";
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Form from "../../components/penyaluran-kerja/form-penyaluran-kerja/Form";

const FormPenyaluranKerja = () => {
	return (
		<>
			<Header />
			<main>
				<section className="py-0">
					<div className="container card shadow my-5 p-4">
						<Form />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default FormPenyaluranKerja;
