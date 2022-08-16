import {
  ReportContainer,
  ReportDetails,
  ResultsWrapper,
  Plagiarised,
  NonPlagiarised,
  Content,
  SourceWrapper,
  Percentage,
  Text,
  SourceText,
  CloseButton
} from "./Report.Style";
const Report = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <ReportContainer className="report-container">
        <CloseButton onClick={onClose}>X</CloseButton>

        <ReportDetails className="report-details">
          <ResultsWrapper className="percentage-container">
            <Plagiarised className="plagiarised">
              <Percentage>60%</Percentage>
              <Text>Plagiarised content</Text>
            </Plagiarised>
            <NonPlagiarised className="non-plagiarised">
              <Percentage>40%</Percentage>
              <Text>Unique content</Text>
            </NonPlagiarised>
          </ResultsWrapper>

          <Content className="content"></Content>

          <SourceWrapper className="source-wrapper">
            <SourceText>Sources</SourceText>
          </SourceWrapper>
        </ReportDetails>
      </ReportContainer>
    </>
  );
};

export default Report;
