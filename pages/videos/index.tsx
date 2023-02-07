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
  Tfoot,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Baselayout from "../../components/layouts/Baselayout";
import VideosModal from "../../components/videos/VideosModal";

interface IVideo {
  id: string;
  name: string;
  file_size: number;
  state: string;
  created_at: string;
  download_url: string;
}

const Index = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();
  const query = router.query;

  const [videos, setVideos] = useState<IVideo[]>([]);

  const [page, setPage] = useState(
    query?.page?.length && !isNaN(parseInt(query?.page as string))
      ? parseInt(query?.page as string)
      : 1
  );
  const [pageSize, setPageSize] = useState(
    query?.per_page?.length && !isNaN(parseInt(query?.page as string))
      ? parseInt(query?.per_page as string)
      : 20
  );
  const [totalSize, setTotalSize] = useState(300);

  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };

  const fetchAssets = async () => {
    const request = await fetch(
      `https://api.video.wowza.com/api/v1.9/assets?page=${page}&per_page=${pageSize}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTU3NzEwZS0yYzhlLTQ1MDgtOTEwOS1hZWMxNTEwODAxY2UiLCJqdGkiOiJiYTdmZDdjOGMyN2RhMDNmZWUyZDU5YzE0MTI2NjAwMTI2MTI2NWU1ZTViOTI5ZjdhOGUxY2I5ZGY5ZjE5YzkwNTEzZTNiZGUyNjZlZjQyYiIsImlhdCI6MTY3NTc1NDA3MSwibmJmIjoxNjc1NzU0MDcxLCJleHAiOjIzMDY5MDYwNzEsInN1YiI6Ik9VLTI1OWRiNDQ3LWRiMjktNDM4NC1iNDE3LTQ4OGRlMTVmM2FhNiJ9.VUNg1bzKDetd-V40ONsF-kYBOX7Q0andNV-YFPCuYSHhysRMkks4MkyMttGjrEGAUbFdgEQ_qZRsEmAV-oJYpDfGjnsJZ4soAj2cRfNm1uRKoTw1nM-iZwmtvr3EZp9-OPhwXczzealYEoCl394pxYUOA4dDDGE11FgIvB_k15iNHDjg0EBGuCmgbQxdnMaeksiPV5EhDrUZSSapZ8rLMT2B1Dkq-BMFWgsd6oztoTmC3sokm29yF9TUoL3N9lx8cKGqBQP5aiGX0K1dB3iynTR3AgOGKkrhnDDzgSHlB1RnJjjLKAQv8__vlfG-fgDp9ppV-PAUQjZOwVSeMxzKuOYJWXEuFSgMfPngkIbQOFZWfGpcZYgFVLS9f4qNhitNOckihb7zvR2TiUAMPpW6qY8oZJfqrJQX7tn7fZStYBpngJ1M8PmEyfnaqiIo-1JzMW8ivdlDz4JH10UMLEhPr6hXI8Nl4VEoEsHnGzzBDlZ9vLJ-T2X_65kLu1vf_Tc-i8ZotI-x42LYyXgGmzGamj3Ge_P69lRCLD0pf7-KvxptR68TexMsIAuZsQC3uTBYhQ1GOM7KxXcPp2RRTSinAO6xG4wzprV4cmwUbD5WbFHhbJOYEh3_5p0cD0MjH5_WHcyP9BvFdjGMVgqsckf5F2QjbZklMDcj7vyEHwIaAxU`,
        },
      }
    );

    if (request.ok) {
      const data = await request.json();
      window.scrollTo(0, 0);
      setVideos(data.assets);
      setPage(data.pagination.page);
      setPageSize(data.pagination.per_page);
      setTotalSize(data.pagination.total_records);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, [query]);

  const handleQuery = () => {
    const query = {
      page: page,
      per_page: pageSize,
    };

    router.push(
      "/videos",
      { query },
      {
        shallow: true,
      }
    );
  };

  useEffect(() => {
    handleQuery();
  }, [page]);
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
                        <Th>Video Id</Th>
                        <Th>File name</Th>
                        <Th>Video Size</Th>
                        <Th>Video url</Th>
                        <Th>Status</Th>
                        <Th>Created At</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {videos?.map((video, index) => (
                        <Tr key={index}>
                          <Td>{video.id}</Td>
                          <Td>{video.name}</Td>
                          <Td>{video.file_size}</Td>
                          <Td>{video.download_url}</Td>
                          <Td>{video.state}</Td>
                          <Td>
                            {dayjs(video.created_at).format("DD MMMM YYYY")}
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>

                    <Tfoot>
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={Math.ceil(totalSize / pageSize)}
                        previousLabel="<"
                        renderOnZeroPageCount={() => null}
                        containerClassName="flex items-center  justify-between gap-3 mt-5"
                        activeClassName="!text-blue-500 font-medium"
                      />
                    </Tfoot>
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
