import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { FaDatabase, FaProjectDiagram, FaTags, FaBook, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <Tabs variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab>
            <FaDatabase /> 数据资源管理
          </Tab>
          <Tab>
            <FaProjectDiagram /> 知识图谱构建
          </Tab>
          <Tab>
            <FaTags /> 资源提炼与标签打标
          </Tab>
          <Tab>
            <FaBook /> 学科知识库访问
          </Tab>
          <Tab>
            <FaUsers /> 知识图谱协同访问
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text fontSize="lg" fontWeight="bold">
              数据资源管理界面
            </Text>
            <Text>提供数据资源管理功能，包括各类数据资源的导入、整合和管理。</Text>
            <Text>显示已有数据资源的信息，如数据类型、来源、数量等。</Text>
            <Text>允许用户根据需要选择特定的学科内容资源。</Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg" fontWeight="bold">
              知识图谱构建界面
            </Text>
            <Text>展示知识图谱构建的流程和进度。</Text>
            <Text>提供知识图谱自动构建的设置选项，包括知识抽取算法、图谱关系定义等。</Text>
            <Text>显示知识图谱的可视化展示，包括实体关系图和属性信息。</Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg" fontWeight="bold">
              资源提炼与标签打标界面
            </Text>
            <Text>实现资源库知识信息的提炼和语义标签的自动打标。</Text>
            <Text>展示资源句子和段落的语义分析结果，以及与具体学科概念相关的标签。</Text>
            <Text>提供手动修正标签的功能，以优化语义分析准确率。</Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg" fontWeight="bold">
              学科知识库访问界面
            </Text>
            <Text>提供学科知识库的搜索和浏览功能。</Text>
            <Text>允许用户按照学科分类、关键词搜索等方式查找知识库中的内容。</Text>
            <Text>展示搜索结果并支持用户查看详细信息。</Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg" fontWeight="bold">
              知识图谱协同访问界面
            </Text>
            <Text>支持多用户协同访问知识图谱和学科知识库。</Text>
            <Text>提供用户权限管理功能，确保不同用户有不同的访问权限。</Text>
            <Text>每个用户可以根据个性化需求定制自己的知识浏览方式。</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Index;
