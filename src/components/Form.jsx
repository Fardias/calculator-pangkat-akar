import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Form() {
  const [type, setType] = React.useState("card");
  const [formDataPangkat, setFormDataPangkat] = React.useState({
    angka: "",
    pangkat: "",
  });
  const [formDataAkar, setFormDataAkar] = React.useState({
    angka: "",
  });

  const handleChangePangkat = (e) => {
    const { name, value } = e.target;
    setFormDataPangkat({
      ...formDataPangkat,
      [name]: value,
    });
  };

  const handleChangeAkar = (e) => {
    const { name, value } = e.target;
    setFormDataAkar({
      ...formDataAkar,
      [name]: value,
    });
  };

  const handleFormPangkat = (e) => {
    e.preventDefault();
    const count = Math.pow(formDataPangkat.angka, formDataPangkat.pangkat);
    alert(
      `Hasil dari ${formDataPangkat.angka} pangkat ${formDataPangkat.pangkat} adalah ${count}`);
    setFormDataPangkat({
      angka: "",
      pangkat: "",
    });
  };

  const handleFormAkar = (e) => {
    e.preventDefault();
    const count = Math.sqrt(formDataAkar.angka);
    alert(`Akar kuadrat dari ${formDataAkar.angka} adalah ${count}`);
    setFormDataAkar({
      angka: "",
    });
  };

  return (
    <Card className="w-full max-w-[24rem] mx-auto mb-5">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
        <div className="p-6 text-white border-4  rounded-xl">
          {type === "card" ? (
            <Typography variant="h5" color="white">
              Calculator Pangkat
            </Typography>
          ) : (
            <Typography variant="h5" color="white">
              Calculator Akar
            </Typography>
          )}
        </div>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 ">
            <Tab value="card" onClick={() => setType("card")}>
              PANGKAT
            </Tab>
            <Tab value="paypal" onClick={() => setType("paypal")}>
              AKAR
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="card" className="p-0">
              <form
                onSubmit={handleFormPangkat}
                className="mt-12 flex flex-col gap-4"
              >
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Masukan Angka
                  </Typography>
                  <Input
                    onChange={handleChangePangkat}
                    type="number"
                    placeholder="Masukan Nilai"
                    name="angka"
                    value={formDataPangkat.angka}
                    step={"any"}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Masukan pangkat
                  </Typography>
                  <Input
                    onChange={handleChangePangkat}
                    id="pangkat"
                    type="number"
                    name="pangkat"
                    value={formDataPangkat.pangkat}
                    placeholder="Masukan Nilai"
                    step={"any"}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </TabPanel>

            <TabPanel value="paypal" className="p-0">
              <form
                onSubmit={handleFormAkar}
                className="mt-12 flex flex-col gap-4"
              >
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Masukan Angka
                  </Typography>
                  <Input
                    onChange={handleChangeAkar}
                    type="number"
                    placeholder="Masukan Nilai"
                    name="angka"
                    value={formDataAkar.angka}
                    step={"any"}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
