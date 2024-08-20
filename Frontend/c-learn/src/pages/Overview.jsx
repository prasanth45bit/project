import React from "react";
import './Overview.css';
import Menubar from "../components/Menubar";
import C_Home from '../Menupage/c-home';
import { Route, Routes } from 'react-router-dom';
import C_Introduction from "../Menupage/c-introduction";
import C_Syntax from "../Menupage/c-syntax";
import C_Output from "../Menupage/c-output";
import C_Comments from "../Menupage/c-comments";
import C_Variables_formatspecifier from "../Menupage/Variables/Format-specifiers";
import C_Variables_create_variables from "../Menupage/Variables/Create_variables";
import C_Variables_change_values from "../Menupage/Variables/Change-values";
import C_Varriable_multiple_variables from "../Menupage/Variables/Multiple-variables";
import C_Datatypes from "../Menupage/Datatypes/Datatype";
import C_Datatypes_characters from "../Menupage/Datatypes/Characters";
import C_Datatypes_numbers from "../Menupage/Datatypes/Numbers";
import C_Datatypes_decimal_precision from "../Menupage/Datatypes/Decimal-precision";
import C_Consonants from "../Menupage/c-consonants";
import C_Operators from "../Menupage/c-operators";
import C_Booleans from "../Menupage/c-booleans";
import C_If from "../Menupage/If/If";
import C_If_else from "../Menupage/If/Else";
import C_If_else_if from "../Menupage/If/Else-if";
import C_If_nested_if from "../Menupage/If/Nested-if";
import C_Switch from "../Menupage/c-switch";
import C_Whileloop from "../Menupage/c-whileloop";
import C_Forloop from "../Menupage/c-forloop";
import C_Break_continue from "../Menupage/c-break-continue";
import C_Arrays from "../Menupage/c-arrays";
import Trynow from "./Trynow";
import C_String from "../Menupage/String/String";
import C_String_special_characters from "../Menupage/String/Special-charactors";
import C_String_function from "../Menupage/String/String-function";
import C_Pointers from "../Menupage/Pointers/Pointers";
import C_Pointers_arrays from "../Menupage/Pointers/Pointers-arrays";
import C_Functions from "../Menupage/Functions/Functions";
import C_Function_declaration from "../Menupage/Functions/Functions-declarations";
import C_Function_parameters from "../Menupage/Functions/Functions-parameters";
import C_Function_recursion from "../Menupage/Functions/Functions-recursion";
import C_Structures from "../Menupage/c-structure";



const Overview = () => {
  return (
    <div className="Overview-screen">
      <div className="Menu-screen">
        <Menubar />    
      </div>
      <div className="Home-screen">
        <Routes>


          <Route path="trynow-page" element={<Trynow />} />


          <Route path="/" element={<C_Home contentId={1}/>} />
          <Route path="c-home" element={<C_Home contentId={1}/>} />
          <Route path="c-introduction" element={<C_Introduction contentId={2}/>} />
          <Route path="c-syntax" element={<C_Syntax contentId={3}/>} />
          <Route path="c-output" element={<C_Output contentId={4}/>} />
          <Route path="c-comments" element={<C_Comments contentId={5}/>} />  
          <Route path="c-variables_create-variables" element={<C_Variables_create_variables contentId={6}/>} />
          <Route path="c-variables_format-specifiers" element={<C_Variables_formatspecifier contentId={6}/>} />
          <Route path="c-variables_change-values" element={<C_Variables_change_values contentId={6}/>} />
          <Route path="c-variables_multiple-variables" element={<C_Varriable_multiple_variables contentId={6}/>} />
          <Route path="c-datatypes" element={<C_Datatypes contentId={7}/>} />
          <Route path="c-datatypes_characters" element={<C_Datatypes_characters contentId={7}/>} />
          <Route path="c-datatypes_numbers" element={<C_Datatypes_numbers contentId={7}/>} />
          <Route path="c-datatypes_decimal-precision" element={<C_Datatypes_decimal_precision contentId={7}/>} />
          <Route path="c-constants" element={<C_Consonants contentId={8}/>} />
          <Route path="c-operators" element={<C_Operators contentId={9}/>} />
          <Route path="c-booleans" element={<C_Booleans contentId={10}/>} />
          <Route path="c-if" element={<C_If contentId={11}/>} />
          <Route path="c-if_else" element={<C_If_else contentId={11}/>} />
          <Route path="c-if_else-if" element={<C_If_else_if contentId={11}/>} />
          <Route path="c-if_nested-if" element={<C_If_nested_if contentId={11}/>} />
          <Route path="c-switch" element={<C_Switch contentId={12}/>} />
          <Route path="c-whileloop" element={<C_Whileloop contentId={13}/>} />
          <Route path="c-forloop" element={<C_Forloop contentId={14}/>} />
          <Route path="c-breakcontinue" element={<C_Break_continue contentId={15}/>} />
          <Route path="c-arrays" element={<C_Arrays contentId={16}/>} />
          <Route path="c-string" element={<C_String contentId={17}/>} />
          <Route path="c-string_special-characters" element={<C_String_special_characters contentId={17}/>} />
          <Route path="c-string-function" element={<C_String_function contentId={17}/>} />
          <Route path="c-pointers" element={<C_Pointers contentId={18} />} />
          <Route path="c-pointers-arrays" element={<C_Pointers_arrays contentId={18}/>} />
          <Route path="c-functions" element={<C_Functions contentId={19}/>} />
          <Route path="c-functions-declaration" element={<C_Function_declaration contentId={19}/>} />
          <Route path="c-functions-parameters" element={<C_Function_parameters contentId={19}/>} />
          <Route path="c-functions-recursion" element={<C_Function_recursion contentId={19}/>} />
          <Route path="c-structures" element={<C_Structures contentId={20}/>} />
        </Routes>
      </div>
    </div>
  );
};
export default Overview;
