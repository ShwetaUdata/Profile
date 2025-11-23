import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const educationData = [
  {
    course: "B.Tech",
    college: "Walchand Institute of Technology, Solapur",
    stream: "Electronics Engineering",
    percentage: "75.01",
    yop: "2021-2024",
  },
  {
    course: "Diploma",
    college: "Shir Siddheshwar Women's Polytechnic, Solapur",
    stream: "Electronics and Telecommunication",
    percentage: "84.76",
    yop: "2018-2021",
  },
  {
    course: "SSC",
    college: "D.R. Shriram English Medium School, Solapur",
    stream: "Secondary School Certificate",
    percentage: "66.6",
    yop: "2017-2018",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="scroll-mt-24 animate-fade-in">
      <h2 className="section-title">Education</h2>
      <Card className="overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/5 hover:bg-primary/10">
                <TableHead className="font-bold text-foreground">Course</TableHead>
                <TableHead className="font-bold text-foreground">College</TableHead>
                <TableHead className="font-bold text-foreground">Stream</TableHead>
                <TableHead className="font-bold text-foreground text-center">Percentage</TableHead>
                <TableHead className="font-bold text-foreground text-center">YOP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {educationData.map((edu, index) => (
                <TableRow key={index} className="hover:bg-secondary/50">
                  <TableCell className="font-semibold text-primary">{edu.course}</TableCell>
                  <TableCell className="text-muted-foreground">{edu.college}</TableCell>
                  <TableCell className="text-muted-foreground">{edu.stream}</TableCell>
                  <TableCell className="text-center font-semibold text-accent">
                    {edu.percentage}%
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">{edu.yop}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </section>
  );
};

export default EducationSection;
