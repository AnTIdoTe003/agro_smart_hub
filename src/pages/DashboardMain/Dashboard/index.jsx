import React, { useEffect, useState } from "react";
import "./style.scss";
import { CiTempHigh } from "react-icons/ci";
import { BsMoisture } from "react-icons/bs";
import { CiCloudDrizzle } from "react-icons/ci";
import Tempcomponent from "./components/Tempcomponent";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [moisture, setMoisture] = useState("0");
  const [isMoistureLow, setIsMoistureLow] = useState(true);
  // const fetchMoistureData = async () => {
  //   try {
  //     const { data } = await axios.get("http://127.0.0.1:5000/get-sensor-data");
  //     console.log(data);
  //     setMoisture(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchMoistureData();
  //   }, 30000);
  // }, []);
  const handleMotor = async (option) => {
    try {
      const { data } = await axios.post("http://127.0.0.1:5000/start-motor");
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Land Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter Land Name "
              style={{ margin: "10px 0" }}
            ></Input>
            <Input
              style={{ "margin-bottom": "10px" }}
              placeholder="Enter Your Land Area"
            ></Input>
            <Input
              style={{ "margin-bottom": "10px" }}
              placeholder="Type Of Crop Land Produces"
            ></Input>
            <Input placeholder="Enter Land Location"></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="dashboard">
        <div className="Weather-report">
          <Tempcomponent
            classname="Weather-div for-color"
            iconname={<CiTempHigh className="Temp-icon" />}
            tempValue="+24℃"
            tempName="Air Temp"
            tempPerformance="good"
            performanceDivClassName="performance-show show1"
          />
          <Tempcomponent
            classname="Weather-div for-color"
            iconname={<BsMoisture className="Temp-icon" />}
            tempValue={moisture}
            tempName="Soil Moisture"
            tempPerformance="High"
            performanceDivClassName="performance-show show1"
          />
          <Tempcomponent
            classname="Weather-div normal"
            iconname={<CiCloudDrizzle className="Temp-icon" />}
            tempValue="-2mm"
            tempName="Precipitation"
            tempPerformance="low"
            performanceDivClassName="performance-show show2"
          />
        </div>
        <div className="dashboard-bottom">
          <div className="map">
            {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5228495961533!2d88.34314047527555!3d22.484558179554472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ecc09b4691%3A0x7f99d48523fd066a!2sCalcutta%20Institute%20of%20Engineering%20And%20Management%20(CIEM)!5e0!3m2!1sen!2sin!4v1703960156856!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
            {isMoistureLow ? (
              <>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Your moisture level is low.
                  </p>
                  <p>Do you want to irrigate?</p>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <button
                      onClick={() => {
                        handleMotor("YES");
                      }}
                      style={{
                        border: "1px solid #ECF39E",
                        width: "100px",
                        height: "50px",
                        fontSize: "26px",
                        borderRadius: "5px",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        handleMotor("NO");
                      }}
                      style={{
                        border: "1px solid #ECF39E",
                        width: "100px",
                        height: "50px",
                        fontSize: "26px",
                        borderRadius: "5px",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Your moisture level is perfect.
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="rightBottom">
            <button onClick={onOpen}>Click to Add Land Details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
