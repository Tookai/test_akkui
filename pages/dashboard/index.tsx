import { Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import type { NextPage } from "next";
import DateDisplay from "../../components/DateDisplay";
import DateMonthYear from "../../components/DateMonthYear";
import UserDrawer from "../../components/test/UserDrawer";
import UserModal from "../../components/test/UserModal";
import PageLayout from "../../layouts/PageLayout";

const Dashboard: NextPage = () => {
  return (
    <PageLayout
      title={"Dashboard"}
      tabsList={[
        {
          name: "Tous",
          route: "/dashboard",
        },
        {
          name: "Nouveaux",
          route: "/dashboard/new",
        },
        {
          name: "En attente",
          route: "/dashboard/waiting",
        },
        {
          name: "Clôturés",
          route: "/dashboard/closed",
        },
      ]}
    >
      <Heading>Dashboard</Heading>
      <UserModal />
      <UserDrawer />
      <DateMonthYear date={dayjs("04/21/1996")} />
      <DateDisplay date={dayjs("04/21/1996")} />

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A saepe cumque
        ad consequatur eum officia, adipisci quaerat quidem, odio architecto
        omnis? Beatae non accusamus nihil pariatur ipsa dolor enim sed! Est quia
        non delectus doloribus. Eligendi pariatur aperiam temporibus
        exercitationem. Eaque at error officia ex, ipsa itaque necessitatibus
        enim molestias, consequuntur cumque a quibusdam repellendus. Laboriosam
        ratione consectetur dignissimos rem! Cumque odio nam maiores error? Eius
        molestias error autem velit dolores accusantium est libero vero dicta
        nostrum, quis id ipsam voluptatum temporibus adipisci beatae voluptate
        cum laborum alias obcaecati maxime! Nam eius quidem placeat vel ut porro
        aperiam tenetur, facere, iste magnam corrupti, voluptas quaerat possimus
        consequatur nobis nesciunt similique modi. Minima repudiandae
        repellendus assumenda aut ullam doloremque, suscipit impedit.
      </Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A saepe cumque
        ad consequatur eum officia, adipisci quaerat quidem, odio architecto
        omnis? Beatae non accusamus nihil pariatur ipsa dolor enim sed! Est quia
        non delectus doloribus. Eligendi pariatur aperiam temporibus
        exercitationem. Eaque at error officia ex, ipsa itaque necessitatibus
        enim molestias, consequuntur cumque a quibusdam repellendus. Laboriosam
        ratione consectetur dignissimos rem! Cumque odio nam maiores error? Eius
        molestias error autem velit dolores accusantium est libero vero dicta
        nostrum, quis id ipsam voluptatum temporibus adipisci beatae voluptate
        cum laborum alias obcaecati maxime! Nam eius quidem placeat vel ut porro
        aperiam tenetur, facere, iste magnam corrupti, voluptas quaerat possimus
        consequatur nobis nesciunt similique modi. Minima repudiandae
        repellendus assumenda aut ullam doloremque, suscipit impedit.
      </Text>{" "}
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A saepe cumque
        ad consequatur eum officia, adipisci quaerat quidem, odio architecto
        omnis? Beatae non accusamus nihil pariatur ipsa dolor enim sed! Est quia
        non delectus doloribus. Eligendi pariatur aperiam temporibus
        exercitationem. Eaque at error officia ex, ipsa itaque necessitatibus
        enim molestias, consequuntur cumque a quibusdam repellendus. Laboriosam
        ratione consectetur dignissimos rem! Cumque odio nam maiores error? Eius
        molestias error autem velit dolores accusantium est libero vero dicta
        nostrum, quis id ipsam voluptatum temporibus adipisci beatae voluptate
        cum laborum alias obcaecati maxime! Nam eius quidem placeat vel ut porro
        aperiam tenetur, facere, iste magnam corrupti, voluptas quaerat possimus
        consequatur nobis nesciunt similique modi. Minima repudiandae
        repellendus assumenda aut ullam doloremque, suscipit impedit.
      </Text>{" "}
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A saepe cumque
        ad consequatur eum officia, adipisci quaerat quidem, odio architecto
        omnis? Beatae non accusamus nihil pariatur ipsa dolor enim sed! Est quia
        non delectus doloribus. Eligendi pariatur aperiam temporibus
        exercitationem. Eaque at error officia ex, ipsa itaque necessitatibus
        enim molestias, consequuntur cumque a quibusdam repellendus. Laboriosam
        ratione consectetur dignissimos rem! Cumque odio nam maiores error? Eius
        molestias error autem velit dolores accusantium est libero vero dicta
        nostrum, quis id ipsam voluptatum temporibus adipisci beatae voluptate
        cum laborum alias obcaecati maxime! Nam eius quidem placeat vel ut porro
        aperiam tenetur, facere, iste magnam corrupti, voluptas quaerat possimus
        consequatur nobis nesciunt similique modi. Minima repudiandae
        repellendus assumenda aut ullam doloremque, suscipit impedit.
      </Text>{" "}
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A saepe cumque
        ad consequatur eum officia, adipisci quaerat quidem, odio architecto
        omnis? Beatae non accusamus nihil pariatur ipsa dolor enim sed! Est quia
        non delectus doloribus. Eligendi pariatur aperiam temporibus
        exercitationem. Eaque at error officia ex, ipsa itaque necessitatibus
        enim molestias, consequuntur cumque a quibusdam repellendus. Laboriosam
        ratione consectetur dignissimos rem! Cumque odio nam maiores error? Eius
        molestias error autem velit dolores accusantium est libero vero dicta
        nostrum, quis id ipsam voluptatum temporibus adipisci beatae voluptate
        cum laborum alias obcaecati maxime! Nam eius quidem placeat vel ut porro
        aperiam tenetur, facere, iste magnam corrupti, voluptas quaerat possimus
        consequatur nobis nesciunt similique modi. Minima repudiandae
        repellendus assumenda aut ullam doloremque, suscipit impedit.
      </Text>{" "}
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A saepe cumque
        ad consequatur eum officia, adipisci quaerat quidem, odio architecto
        omnis? Beatae non accusamus nihil pariatur ipsa dolor enim sed! Est quia
        non delectus doloribus. Eligendi pariatur aperiam temporibus
        exercitationem. Eaque at error officia ex, ipsa itaque necessitatibus
        enim molestias, consequuntur cumque a quibusdam repellendus. Laboriosam
        ratione consectetur dignissimos rem! Cumque odio nam maiores error? Eius
        molestias error autem velit dolores accusantium est libero vero dicta
        nostrum, quis id ipsam voluptatum temporibus adipisci beatae voluptate
        cum laborum alias obcaecati maxime! Nam eius quidem placeat vel ut porro
        aperiam tenetur, facere, iste magnam corrupti, voluptas quaerat possimus
        consequatur nobis nesciunt similique modi. Minima repudiandae
        repellendus assumenda aut ullam doloremque, suscipit impedit.
      </Text>{" "}
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A saepe cumque
        ad consequatur eum officia, adipisci quaerat quidem, odio architecto
        omnis? Beatae non accusamus nihil pariatur ipsa dolor enim sed! Est quia
        non delectus doloribus. Eligendi pariatur aperiam temporibus
        exercitationem. Eaque at error officia ex, ipsa itaque necessitatibus
        enim molestias, consequuntur cumque a quibusdam repellendus. Laboriosam
        ratione consectetur dignissimos rem! Cumque odio nam maiores error? Eius
        molestias error autem velit dolores accusantium est libero vero dicta
        nostrum, quis id ipsam voluptatum temporibus adipisci beatae voluptate
        cum laborum alias obcaecati maxime! Nam eius quidem placeat vel ut porro
        aperiam tenetur, facere, iste magnam corrupti, voluptas quaerat possimus
        consequatur nobis nesciunt similique modi. Minima repudiandae
        repellendus assumenda aut ullam doloremque, suscipit impedit.
      </Text>
    </PageLayout>
  );
};

export default Dashboard;
