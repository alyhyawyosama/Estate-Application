// // Copyright (c) 2023, osama and contributors
// // For license information, please see license.txt


// //I have created this file in this folder to understand how to include external javascript file to a specific doctype


// frappe.ui.form.on('Property', {
//     setup:function (frm) {

//         frm.compute_total = function (frm) {
//             let exist_amenities_cost = 0;
//             frm.doc.amenities.forEach( c => {
//                 exist_amenities_cost += c.amenity_price ;
//             } )
//             //Total cost
//             let total_cost= frm.doc.property_price + exist_amenities_cost ;
//             //Check whether discount is 0 or not 
//             total_cost = ( frm.doc.discount != 0 ) ?(total_cost - (total_cost * (frm.doc.discount/100))) : total_cost ;
//             //Set grand total cost 
//             frm.set_value('grand_total',total_cost);
//         }

//         frm.copy_discount = function (frm) {

//             frm.doc.amenities.forEach( c => {
//                 c.discount = frm.doc.discount ;
//             } );
//             frm.refresh_field('amenities');
//         }
//     },

//     property_price :function (frm) {
//         frm.compute_total(frm);
//     },

//     discount :function (frm) {
//         frm.compute_total(frm);
//         frm.copy_discount(frm);
//     },

//     refresh:async function(frm) {
//         //Check whether doctype is new or no and then get the properties that have the same property type
//         //First way 
//         if (!frm.is_new()) {
//             frappe.call(
//                 {
//                     method: 'estate_app.estate_app.doctype.property.api.check_property_type',
//                     args: {
//                         'property_type': frm.doc.property_type
//                     },
//                     callback: (r) => {
//                         const listName = r.message.map(v=>v.name)
//                         let msg = "<h4>Below properties is of a "+cur_frm.doc.property_type+" type</h4><div>";
//                         listName.forEach((v)=>{
//                             //Skip the current page don not display it in the list 
//                             if ( v != cur_frm.doc.name) {
//                                 msg += "<span>Name: "+v+" : \
//                                 <a href=/app/property/"+v+">Visit </a> \
//                                 </span><br>"       
//                             }
//                         } )
//                         msg+='</div>';              
//                         cur_frm.add_custom_button(
//                         'Check Propert Types',()=>{
//                          frappe.msgprint({
//                             title: "Msg",
//                             indicator: 'green',
//                             message: msg}
//                           );
                        
//                         }
//                         )
//                     },
//                     error: (r) => {
//                         // on error
//                     }
//                 },

//             );
//             // Second  way 
//             // make a button when click show message displays existed property of a specific property field 
//             // const list2 = await frappe.db.get_list(
//             //     'Property',{
//             //     filters:{
//             //         'property_type':cur_frm.doc.property_type
//             //     }
//             //     }
//             // )
//             // const listName = list2.map(v=>v.name)
            
//             // let msg = "<h4>Below properties is of a "+cur_frm.doc.property_type+" type</h4><div>";
          
//             // listName.forEach((v)=>{
//             //     msg += "<span>Name: "+v+" : \
//             //     <a href=/app/property/"+v+">Visit </a> \
//             //     </span><br>"
//             // } )
//             // msg+='</div>';              
//             // cur_frm.add_custom_button(
//             // 'Check Propert Types',()=>{
//             //  frappe.msgprint({
//             //     title: "Msg",
//             //     indicator: 'green',
//             //     message: msg}
//             //   );
              
//             // }
//             // )
//         }
//         // const page = frappe ;
    
//         //Filter the child table to shows only unselected items ,distinct items
//         frm.fields_dict['amenities'].grid.get_field('amenity').get_query = function(doc, cdt, cdn) {
//         // frm.fields_dict['amenities'].grid.get_field('amenity').get_query = function(doc, cdt, cdn) {
//             let selected_items = [];
//             let selected_prices = 0;
            
//             // Loop through existing rows and collect selected items
//             frm.doc.amenities.forEach(function(row) {
//                 selected_items.push(row.amenity);
//                 selected_prices += Number(row.amenity_price);
//             });
            
        
// 			// Set query to filter out already selected items
//             return {
//                 filters: [
//                     // ['Property amenity item', 'name', 'not in', selected_items]
// 					['Property amenity item', 'amenity', 'not in', selected_items]
//                 ]
//             };
//         };       
//     }
// });





// frappe.ui.form.on('Property amenity detail', { // The child table is defined in a DoctType called "Dynamic Link"
   
//    amenity:function (frm,cdt,cdn) {
//     let row = locals[cdt][cdn];
//     frm.compute_total(frm);
//    },
//     amenities_remove:function (frm, cdt, cdn) { // "links" is the name of the table field in ToDo, "_add" is the event
//         frm.compute_total(frm);
//     }

//     // amenities_add(frm, cdt, cdn) { // "links" is the name of the table field in ToDo, "_add" is the event
//     //     // frm: current ToDo form
//     //     // cdt: child DocType 'Dynamic Link'
//     //     // cdn: child docname (something like 'a6dfk76')
//     //     // cdt and cdn are useful for identifying which row triggered this event

//     //     frappe.msgprint('A row has been added to the links table 🎉 ');
//     // }
// });