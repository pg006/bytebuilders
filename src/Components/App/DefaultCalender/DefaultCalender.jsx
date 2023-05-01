import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import "./DefaultCalender.scss";
import { Card } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const DefaultCalender = () => {
  return (
    <React.Fragment>
      <div>
        {/* <!-- PAGE-HEADER --> */}
        <PageHeader
          titles="Default Calender"
          active="Default Calender"
          items={["Apps"]}
        />

        {/* <!-- ROW OPEN--> */}
        <div className="">
          <Card>
            <Card.Body>
              <div>
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* <!-- ROW CLOSE--> */}
      </div>
    </React.Fragment>
  );
};

export default DefaultCalender;
