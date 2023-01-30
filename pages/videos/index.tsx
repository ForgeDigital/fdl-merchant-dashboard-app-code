import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Baselayout from "../../components/layouts/Baselayout";
import VideosModal from "../../components/videos/VideosModal";

const Index = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Baselayout>
      <div className="py-12">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Videos</h1>
          <div>
            <Button onClick={onOpen} bg={"blue"} color={"white"}>
              Add A New Video
            </Button>
          </div>
        </div>
        <VideosModal isOpen={isOpen} onClose={onClose} />
        <div className=" mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="bg-gray-50 p-5 rounded-md shadow-sm mt-10">
              <h3 className="text-2xl font-semibold">Your videos</h3>

              <div>
                <TableContainer mt={10}>
                  <Table variant={"striped"}>
                    <Thead>
                      <Tr>
                        <Th>Title</Th>
                        <Th>View</Th>
                        <Th>Watch hours</Th>
                        <Th>Revenue generated</Th>
                        <Th>Upload Date</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                        <Td>25.4</Td>
                        <Td>25.4</Td>
                      </Tr>
                      <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td>30.48</Td>
                        <Td>30.48</Td>
                        <Td>30.48</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                        <Td>0.91444</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
};

export default Index;
