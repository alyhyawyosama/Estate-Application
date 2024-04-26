import frappe



def get_context(context):
    try:
        docname = frappe.form_dict.docname
        property = frappe.get_doc('Property',frappe.form_dict.docname)
        agent = frappe.get_doc('Agent',property.agent)
        relate_properties = frappe.db.get_list('Property',
            fields=['name','property_name', 'address','grand_total','status','image'],
            filters={
                'name': ['!=',docname]
            },
            order_by='creation desc',
            start=0,
            page_length=3
        )    
        context.property  = property
        context.relate_properties  = relate_properties
        context.agent  = agent
    except Exception as e:
        frappe.local.flags.redirect_location = "/404"
        raise frappe.Redirect
    
    return context 